import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import ChatContainer from './ChatContainer'
import Bauli from '../images/bauli.png'


const Dashboard = () => {
    const characters = [
        {
            name: 'Richard Hendricks',
            url: 'https://i.imgur.com/MWAcQRM.jpg'
        },
        {
            name:'Jared Dunn',
            url: 'https://i.imgur.com/Gg6BpGn.jpg'
        },
        {
            name: 'Maria Eduarda',
            url: 'https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/69746666_2070566409709884_1254732287019319296_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kV8aamW-uKwAX_dUdrJ&tn=WYI7k3yOcDwhbzVF&_nc_ht=scontent-gig2-1.xx&oh=00_AT9nA1sMReV14SzwFPLb_ob8W_rusx590hA9mpJven6r4Q&oe=628A54F9'
        },
        {
            name: 'Murilo T.',
            url: 'https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/272012598_10227442462148913_1260634268091268484_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=sqe30r_lFBMAX_z_Wi3&_nc_oc=AQmdKEeRY5Y5D4gWCehZdXS7j2rEKhNgG9xfuDGtzpZYe6DXEYozLFLy7wXM221bQk4&_nc_ht=scontent-gig2-1.xx&oh=00_AT-Dm0_-Jh1-dHdA5VyPBVLoatOganHgNrGXd0df4HRdsQ&oe=62683254'
        },
        {
            name: "Adernam Bauli",
            url: 'https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/60160426_2186909051423738_8735415983402909696_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bURPoeLcHckAX_YwLiE&_nc_ht=scontent-gig2-1.xx&oh=00_AT90TJ3-DkFcN5puwfP94b760wYrIloZ6oKoO4uw8cGGEA&oe=62892CD3'
        }
    ]



    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing:' + nameToDelete)
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

                            {characters?.map((character) =>
                                <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)}
                                    onCardLeftScreen={() => outOfFrame(character.name)} >
                                    <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                                        <h3>{character.name}</h3>
                                    </div>
                                </TinderCard>
                            )}

                            <div className='swipe-info'>
                                {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
                            </div>

                        </div>
                    </div>
                </div>
    )
}



export default Dashboard;