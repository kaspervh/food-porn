import React, {useState} from 'react';

const Home = () => {
  const [recipies] = useState([
    {
    name: 'diller',
    image: 'https://images.pexels.com/photos/1889651/pexels-photo-1889651.jpeg?cs=srgb&dl=pexels-dalila-dalprat-1889651.jpg&fm=jpg'
    },
    {
    name: 'diller',
    image: 'https://images.pexels.com/photos/1889651/pexels-photo-1889651.jpeg?cs=srgb&dl=pexels-dalila-dalprat-1889651.jpg&fm=jpg'
    },
    {
    name: 'diller',
    image: 'https://images.pexels.com/photos/1889651/pexels-photo-1889651.jpeg?cs=srgb&dl=pexels-dalila-dalprat-1889651.jpg&fm=jpg'
    },
    {
    name: 'diller',
    image: 'https://images.pexels.com/photos/1889651/pexels-photo-1889651.jpeg?cs=srgb&dl=pexels-dalila-dalprat-1889651.jpg&fm=jpg'
    },
    {
    name: 'diller',
    image: 'https://images.pexels.com/photos/1889651/pexels-photo-1889651.jpeg?cs=srgb&dl=pexels-dalila-dalprat-1889651.jpg&fm=jpg'
    },
    {
    name: 'diller',
    image: 'https://images.pexels.com/photos/1889651/pexels-photo-1889651.jpeg?cs=srgb&dl=pexels-dalila-dalprat-1889651.jpg&fm=jpg'
    },
    {
    name: 'diller',
    image: 'https://images.pexels.com/photos/1889651/pexels-photo-1889651.jpeg?cs=srgb&dl=pexels-dalila-dalprat-1889651.jpg&fm=jpg'
    },
    {
    name: 'diller',
    image: 'https://images.pexels.com/photos/1889651/pexels-photo-1889651.jpeg?cs=srgb&dl=pexels-dalila-dalprat-1889651.jpg&fm=jpg'
    },

  ])

  return(
    <div>
      <div className="big_image"></div>

      <div className="recipies-container">
        {recipies.map((recipie, index) => 
          <div className="recepie_box" key={index}>
            <img src={recipie.image}/>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home;