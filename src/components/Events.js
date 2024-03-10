import sol from '../images/sol.jpg'
import sol1 from '../images/sol1.jpeg'
import sol2 from '../images/sol2.jpg'
import sol3 from '../images/sol3.jpeg'
import './Events.css'
import EventsData from './EventsData'

const Events = () =>{
    return(
        <div className="events">
            <h1>Popular Events</h1>
            <p>Welcome to our innovative online event management system! Whether you're planning a corporate conference, a wedding, or a community fundraiser, our platform offers the tools and support you need to make your event a success. From streamlined guest list management to seamless ticket sales, our user-friendly interface empowers you to effortlessly organize every aspect of your event. With robust features like customizable event pages, integrated payment processing, and real-time analytics, you'll have everything you need to create memorable experiences for your attendees. Join us today and let's bring your event vision to life!</p>
        <EventsData
        className="first-eve"
            heading="Sol Fest"
            text="Apart from Sauti Sol who are confirmed to be performing in the third edition of Sol Fest, other performers are yet to be revealed. The group confirmed SolFest will be their last joint concert ahead of their hiatus in a press statement back in May.Described as “an unforgettable experience” the band urged fans not to miss out on a chance to see their farewell tour, sharing their culminating farewell concert will be at SolFest 2023.”"
            img1={sol}
            img2={sol1}
        />
        <EventsData
        className="first-eve-reverse"

            heading="Shin City"
            text="Shin City was Nyashinski’s way of finally inviting his fans, and the world, into his mind. He opened his heart and soul and bared it all for everyone to see. It was his rare moment of vulnerability. He revealed as much as he possibly could, without saying anything too openly, but through his art and creative mindset.To do this, Nyashinski took up the Carnivore Grounds in Nairobi and divided it into two sections; the Shin City itself, and the main arena of the concert."
            img1={sol3}
            img2={sol2}
        />
        </div>

    );
};

export default Events;