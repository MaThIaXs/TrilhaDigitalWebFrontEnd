import MeuComponente from './components/MeuComponente'

function App() {
  return (
    <>
      <h1>Olá Mundo, React!</h1>
      <MeuComponente />
      <MeuBotao conteudo='me clique' />
      <MeuBotao conteudo='depois aqui' />
      <MeuBotao conteudo='por fim aqui' />
    </>
  )
}

function MeuBotao(props) {
  return (
    <button>
      {props.conteudo}
    </button>
  )
}

export default App