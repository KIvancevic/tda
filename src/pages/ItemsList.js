import { useEffect } from 'react'
import { useItems } from "../hooks/useItems"
import "./itemsList.css"
import { useStateValue } from '../stateProvider/stateProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function ItemsList(props) {
  const [{ likedBasket }, dispatch] = useStateValue();
  
  const addToBasket = (id,name,image, gender, species, alive, status) => {
    dispatch({
      type: 'ADD_TO_LIKEDBASKET',
      item: {
        id: id,
        name: name,
        image: image,
        gender: gender,
        species: species,
        alive: alive,
        status: status,
      }
    })
  }

  const removeFromBasket = (id) => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }

  useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(likedBasket))
  }, [likedBasket])

  const { error, loading, data } = useItems()

  if(loading) return <div>spinner..</div>

  if(error) return <div>Something went wrong</div>

  return (  
        <div className="itemsList">   
          {!false && data.characters.results.slice(0,9).map((character, i) => {
            let newValue = likedBasket.some((item) => {
              if(item.id === character.id) {
                return true
              } else {
                return false
              }
            });
            
            return  <div key={i}>
                      <div className='indicatorContainer'>
                        <img src={character.image} alt="item" />
                        {newValue && <span className='indicator'><FontAwesomeIcon size="xl" icon={faHeart} /></span>}
                      </div>
                      <h2>{character.name}</h2>
                      <p>{character.gender}</p>
                      <p>{character.species}</p>
                      
                      <div className='buttonContainer'>
                        <button 
                          onClick={() => addToBasket(character.id, character.name, character.image, character.gender, character.species, character.alive, character.status)}
                          className='button' 
                        >
                          Add to Liked
                        </button>
                        <button 
                          className='button' 
                          onClick={() => removeFromBasket(character.id)}
                        >
                          Remove from liked
                        </button>
                      </div>
                    </div>
          })}
        </div>
  )
}

export default ItemsList