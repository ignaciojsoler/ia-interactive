import Fruits from "../components/Fruits";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Products from "../components/Products";

const Home = () => {
    return (
        <div className='home'>
            <Fruits/>
            <Hero/>
            <Info/>
            <Products/>
        </div>
    );
};

export default Home;