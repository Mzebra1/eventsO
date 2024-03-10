import './Recent.css'
import RecentData from './RecentData';
import Recent1 from '../images/recent1.png'
import Recent2 from '../images/recent2.jpg'
import Recent3 from '../images/recent3.jpg'

function Recent(){
    return(
        <div className='recent'>
            <h1>Recent Events</h1>
            <p>Discover some of the most recent events we have held.</p>
        <div className='recentcard'>
            <RecentData
            image={Recent1}
            heading= "The Oktobafest, 2023"
            text="Beer and music lovers enjoyed 3 days of exhilarating live performances from over 100 Kenyan artists drawn from various regions. Some of the top acts who performed included both established and rising stars. They included Nyashinski, Khaligraph Jones, Chris Kaiga, Mejja, Nadia Mukami, Ndovu Kuu, Fena Gitu, Ssaru, and Maandy. In addition, the decks were manned by top spin masters such as Grauchi, Suraj, Most Wanted, Shawn, and Chopsticks among others"
            />

             <RecentData
            image={Recent2}
            heading= "The Rong Experience, 2023"
            text="Wakadinali fulfilled their promise with the Rong Experience, delivering electrifying performances that resonated with their fans. Their eclectic live sets ushered in a new era for the trio and we can’t wait to see what shows they have in store for next year."
            />
            
            <RecentData
            image={Recent3}
            heading= "Happy Country, 2023"
            text="Crazy Kennar’s Happy Country couldn’t miss the list as one of the biggest comedy shows of the year. The stupendous cast brought joy and laughter to audiences, grandly debuting his stage shows. Happy Country remains the talk of the town courtesy of the impressive cast and production."
            />
        </div>
        </div>
    );
}

export default Recent;