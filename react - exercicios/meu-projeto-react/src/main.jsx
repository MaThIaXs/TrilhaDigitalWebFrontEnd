import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function MeuComponente() {
  return (
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ut eos, deleniti nemo aut non cum laudantium veritatis quisquam. Cumque expedita eos adipisci dolorum suscipit esse minima eligendi incidunt atque!
    </p>
  )
}