import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import ChatContainer from './ChatContainer'


const Dashboard = () => {
    const characters = [
        {
            name: 'Richard Hendricks',
            url: 'https://i.imgur.com/Lnt9K7l.jpg'
        },

        {
            name: 'Erlich Bachman',
            url:  'https://i.imgur.com/Lnt9K7l.jpg'
        },

        {
            name: 'Monica Hall',
            url:  'https://i.imgur.com/Lnt9K7l.jpg'
        },

        {
            name: 'Jared Dunn',
            url:  'https://i.imgur.com/Lnt9K7l.jpg'
        },

        {
            name: 'Dinesh Chugtai',
            url:  'https://i.imgur.com/Lnt9K7l.jpg'
        },
    ]



    const [ lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen ')
    }


    return (
        <div className="dashboard">
            <ChatContainer />
        
            <div className="swipe-container">

                <div className="card-container">

                    {characters.map((character) =>
                        <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)}
                            onCardLeftScreen={() => outOfFrame(character.name)} >
                            <div style={{ backgroundImage: 'url(' + character.url + ')'}} className='card'>
                            <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}

                    <div className='swipe-info'>
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;