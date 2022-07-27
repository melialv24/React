import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

export const HeroeList = ({ publisher }) => {

    const dataHeroes = getHeroesByPublisher(publisher)

  return (
    <ul>
        {dataHeroes &&
            dataHeroes.map(heroe => (
                <li key={heroe.id}>
                    {heroe.superhero}
                </li>
            ))
        
        }
        
    </ul>
  )
}
