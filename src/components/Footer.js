import './Footer.css'

const Footer = () =>{
    return(
        <div className="footer">
        <div className="top">
        <div>
        <h1>EventsO</h1>
        <p>Choose Your Event.</p>
        </div>
        <div>
            <a href="/">
                <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-twitter-square"></i>
            </a>
        </div>

        </div>
        <div className="bottom">
            <div>
                <h4>Sales</h4>
                <a href="/">Request a demo</a>
                <a href="/">Pricing</a>
                <a href="/">Contact Us</a>
                <a href="/">0782920978</a>
            </div>
            <div>
                <h4>Popular products</h4>
                <a href="/">Event registration</a>
                <a href="/">Venue sourcing</a>
                <a href="/">Accessibility</a>
                <a href="/">All products</a>
            </div>
            <div>
                <h4>Free resources</h4>
                <a href="/">Blog</a>
                <a href="/">Events</a>
                <a href="/">Best event venues</a>
                <a href="/">Find event venues</a>
            </div>
            <div>
                <h4>About</h4>
                <a href="/">Awards</a>
                <a href="/">Management team</a>
                <a href="/">Newsroom</a>
                <a href="/">Partners</a>
            </div>
        </div>

        </div>
    );
}

export default Footer;