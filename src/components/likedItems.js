import { useStateValue } from '../stateProvider/stateProvider'
import './likedItems.css'

function LikedItems({ id, image, name, gender, status, species, }) {
  const [ dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }

  return (
      <div className='container'>
        <div className='innerDiv'>
          <img className='likedItemImage' src={image} alt="item" witdh={250} heigth={250}/>
          <div>
            <h2 className='likeImageName'>{name}</h2>
            <p className='likeImageText'>{status}</p>
            <p>{gender}</p>
            <p>{species}</p>
          </div>
        </div>
          <button 
            className='likeImageButton' 
            onClick={removeFromBasket}
          >
            Remove from liked
          </button>
      </div>
  )
}

export default LikedItems