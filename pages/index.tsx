import Spinner from "@/app/modules/Spinner";
import HomePage from "@/app/template/homePage";

export default function Home({ data, Errors }:any) {
  return (
    <>
      {!Errors ? <HomePage data={data} /> : <Spinner />}
    </>
  )
}

export async function getStaticProps() {

  
  try {
    const res = await fetch(`${process.env.BASE_URL}/data`);
    const data = await res.json();
  
    return {
      props: { data },
      revalidate: 10, //seconds
    };
  } catch (error:any) {
    
    return {
      props: { Errors: error.message },
    };

  }
}