import MeuComponente from './components/MeuComponente'
import MeuContador from './components/MeuContador'
import MinhaLista from './components/MinhaLista'

function App() {
  return (
    <>
      <h1>Olá Mundo, React!</h1>
      <MeuComponente />
      {/* <MeuBotao conteudo='me clique' />
      <MeuBotao conteudo='depois aqui' />
      <MeuBotao conteudo='por fim aqui' /> */}
      <hr></hr>
      <MeuContador />
      <hr />
      <h1>Minha Lista</h1>
      <MinhaLista />
    </>
  )
}

// function MeuBotao(props) {
//   return (
//     <button>
//       {props.conteudo}
//     </button>
//   )
// }

export default App