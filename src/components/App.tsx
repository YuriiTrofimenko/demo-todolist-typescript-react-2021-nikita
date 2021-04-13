import { inject, observer } from 'mobx-react'
import React/* , { useState, useEffect } */ from 'react'
import Footer from './common/Footer'
import Header from './common/Header'
import { CommonStore } from '../stores/CommonStore'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core'

// интерфейс той части внешних параметров,
// значения которых передаются в компонент App неявно,
// внедрением зависимости, то есть, например,
// нигде в коде представлений других компонент не встречается запись вида:
// <App commonStore={commonStore} />
interface IInjectedProps extends IProps, WithStyles<typeof styles> {
  // неявно, из интерфейса WithStyles, добавлено свойство classes
  commonStore: CommonStore
}
interface IProps {}
interface IState {
  date: string
}

const styles = (theme: Theme) => createStyles({
  loading: {
    backgroundColor: 'yellow',
    position: 'fixed',
    top: 10,
    left: '50%',
    alignContent: 'center',
    padding: 10
  }
})

/* Class Root Component */
@inject('commonStore')
@observer
class App extends React.Component<IProps, IState> {
  // State
  // const [date, setDate] = useState(<div>{new Date().toLocaleTimeString('ru')}</div>)
  constructor (props: IProps) {
    // вызов конструктора класса родителя React.Component
    super(props)
    // инициализация состояния компонента
    this.state = {
      date: new Date().toLocaleTimeString('ru')
    }
  }
  // свойство компонента, доступное только для чтения
  get injected () {
    // возвращает ссылку на словарь внешних параметров props,
    // типизированную интерфейсом IInjectedProps
    return this.props as IInjectedProps
  }
  // Lifecycle Handlers
  /* useEffect(() => {
    console.log('useEffect')
    setInterval(() => {
      setDate(<div>{new Date().toLocaleTimeString('ru')}</div>)
      console.log(new Date().toLocaleTimeString('ru'))
    }, 1000)
  }, []) */
  componentDidMount () {
    // console.log('componentDidMount')
    setInterval(() => {
      this.setState({date: new Date().toLocaleTimeString('ru')})
      console.log(new Date().toLocaleTimeString('ru'))
    }, 1000)
    // debug code: try common store loading property
    this.injected.commonStore.setLoading(true)
    setTimeout(() => {
      this.injected.commonStore.setLoading(false)
    }, 5000)
  }
  // Temporary constants, variables and logic
  // ...
  // View
  render () {
    const {classes} = this.injected
    const loadingBlock = this.injected.commonStore.loading ? <div className={classes.loading}>Loading ...</div> : ''
    return (
      <>
        {/*<h1>Hello React!</h1>*/}
        <Header headerText='Hello React!'>
          Subtitle
        </Header>
        {loadingBlock}
        <div>
          {this.state.date}
        </div>
        <Footer companyName='tyaa'/>
      </>
    )
  }
}

export default withStyles(styles)(App)
