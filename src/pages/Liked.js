import { useStateValue } from '../stateProvider/stateProvider'
import './Liked.css'
import LikedItems from '../components/likedItems';

function Liked() {
  const [{ likedBasket }] = useStateValue();

  return (
    <div className="container">
      <h2>Liked items</h2>
      <p>
        Total Likes: ({likedBasket?.length} items)
      </p>
      <div className="basketDiv">
        {likedBasket?.map((item, i) => (
          <LikedItems 
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            species={item.species}
            status={item.status}
            gender={item.gender}
          />
        ))}
      </div>
    </div>
    
  )
}

export default Liked