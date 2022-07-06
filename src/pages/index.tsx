import { FormEvent, useState } from "react";
import { SearchResults } from "../components/SearchResults";

export default function Home(){

    const [search,setSearch]= useState('');
    const [results, setResults] = useState([]);
    
    async function handleSearch(event: FormEvent){
        event.preventDefault();

        if(!search.trim()){
            return;
        }
        const response = await fetch(`http://localhost:3333/products?q=${search}`)
        const data = await response.json();
        setResults(data);
    }
  
    return(
       <div>
            <h1>Search</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={search}
                    onChange={e=> setSearch(e.target.value)}/>
                <button type="submit">
                    Buscar
                </button>
            </form>
            <SearchResults results={results}/>
       </div> 
    )
} 

/**
 *Algoritmo React de Renderização

 1.Criar uma nova versão do componente
 2.Comparar com versão anterior
 3.Se ouverem alterações vai atualizar o que alterou.

 Sempre que componente pai atualizar os componentes filhos sempre terão uma nova versão deles sendo criada, pra então ser comparada.
 */