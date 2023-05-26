import Banner from "./Banner";
import Catagory from "./Catagory";
import Feedback from "./Feedback";
import Gallery from "./Gallery";
import Review from "./Review";
import { Helmet } from "react-helmet";

const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>DisneyMagicMart | Home</title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
             <Catagory></Catagory>
             <Review></Review>
             <Feedback></Feedback>
        </div>
    );
};

export default Home;