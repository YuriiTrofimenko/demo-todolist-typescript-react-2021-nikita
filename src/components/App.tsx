import React/* , { useState, useEffect } */ from 'react'
import Footer from './common/Footer'
import Header from './common/Header'

interface IProps {}
interface IState {
  date: string
}

/* Class Root Component */
class App extends React.Component<IProps, IState> {
  // State
  // const [date, setDate] = useState(<div>{new Date().toLocaleTimeString('ru')}</div>)
  constructor (props: IProps) {
    super(props)
    this.state = {
      date: new Date().toLocaleTimeString('ru')
    }
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
    console.log('componentDidMount')
    setInterval(() => {
      this.setState({date: new Date().toLocaleTimeString('ru')})
      console.log(new Date().toLocaleTimeString('ru'))
    }, 1000)
  }
  // Temporary constants, variables and logic
  // ...
  // View
  render () {
    return (
      <>
        {/*<h1>Hello React!</h1>*/}
        <Header headerText='Hello React!'>
          Subtitle
        </Header>
        <div>
          {this.state.date}
        </div>
        <Footer companyName='tyaa'/>
      </>
    )
  }
}

export default App
