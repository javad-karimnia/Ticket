import Banner from "../modules/Banner";
import Products from "../modules/Products";


const HomePage = ({data}:any) => {
    return (
        <>
           <Banner />
           <Products data={data}/>
        </>
    );
};

export default HomePage;