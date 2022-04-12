import './header.css'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from "../stateProvider/stateProvider"


function Header() {
  const [{likedBasket}]= useStateValue();
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/liked', {replace: false}), [navigate])
  const handleOnClickHome = useCallback(() => navigate('/', {replace: false}), [navigate])

  return (
    <div className="navbar">
      <h1>List of characters Rick and Morty characters</h1>
      <div>
        <button type="button" className='navButton' onClick={handleOnClickHome}>Home</button>
        <button type="button" className='navButton' onClick={handleOnClick}>Liked</button>
        <p className='numberOfLikedItems'>Liked: {likedBasket?.length} items </p>
      </div>
    </div>
  )
}

export default Header