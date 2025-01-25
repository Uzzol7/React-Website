import React from 'react'
import "./header.css"


const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents" >
        <h2>
          Order your Fav Food Here
        </h2>
        <p>At Hot Kitchen, we believe that great food deserves to be enjoyed fresh and fast. That’s why we’ve made it our mission to bring delicious meals straight from our kitchen to your door, ensuring every bite is packed with flavor and quality. Whether you’re craving comfort food, healthy eats, or something indulgent, we’ve got you covered with a menu that caters to every taste. With seamless ordering, swift delivery, and a promise of freshness, we’re here to make your dining experience effortless and satisfying, every single time.</p>
        <button className='button-order'> View Menu </button>
      </div>
      
    </div>
  )
}

export default Header
