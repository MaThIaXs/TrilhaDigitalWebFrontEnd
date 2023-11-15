import { useEffect, useState } from "react"

const lista = [
  {id: '1', value: 'Fruta'},
  {id: '2', value: 'Legume'},
  {id: '3', value: 'Carne'},
]

export default function MinhaLista() {
  
  const [produtos, setProdutos] = useState(lista);
  const [pesquisa, setPesquisa] = useState('');

  useEffect( //toda vez que tiver uma reenderização do componente o useEffect é executado
    () => {
      if(pesquisa) { //se a pesquisa for verdadeira atualiza para a novaLista
        const novaLista = lista.filter((item) => { //permite criar uma lista nova somente com os elementos que eu quero com base em uma condição
          return item.value.toLowerCase().includes(pesquisa.toLowerCase());//para cada item pega o valor e verifica se o valor dele inclui o que esta na pesquisa
        })
        setProdutos(novaLista);
      } else { 
        setProdutos(lista)
      }

    }, [pesquisa]//executa o efeito colateral quando a pesquisa se altera
  )

  return(
    <div>
      <h1>Efeitos colaterais</h1>
      <input 
        value={pesquisa} //valor do input vai ser a variavel que irei definir
        onChange={(e) => setPesquisa(e.target.value)} //permite ouvir a mudança do valor do input definindo a pesquisa com o valor que esta sendo digitado
        placeholder="pesquise aqui..."></input>

      {produtos.map((item) => {
        return(
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        )
      })}
    </div>
  )
}