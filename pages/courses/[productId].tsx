import DetailsPage from "@/app/template/DetailsPage";
import axios from "axios";

const Productdetails = ({productDetails}:any) => {
    
    return (
        <>
            <DetailsPage productDetails={productDetails} />
        </>
    );
};

export default Productdetails;

export async function getStaticPaths() {

    
    const res = await axios.get('http://localhost:4000/data');
    
        const paths = res.data.map( (item:any) => ({
            params: {
                productId: item.id.toString(),
            }
        }))

        return {
            paths,
            fallback: false,
        }     
    
}


export async function getStaticProps(context:any) {
    
    const { params } = context;
        
    const res = await axios.get(`http://localhost:4000/data/${params.productId}`);
    
    return {
        props: { productDetails: res.data }
    }  

}