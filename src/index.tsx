import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
// импорт по умолчанию экземпляра хранилища CommonStore
import commonStore from './stores/CommonStore'
import { Provider } from 'mobx-react'

// ссылки на все объекты хранилищ
const stores = {
  commonStore
}

ReactDOM.render(
  <React.StrictMode>
    {/* завертывание экземпляра App в невидимый компонент Provider,
    который предоставляет возможность компоненту App и всем вложенным в него компонентам
    запросить внедрение зависимости любого из модулей хранилища,
    перечисленных в объекте stores */}
    <Provider {...stores}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
