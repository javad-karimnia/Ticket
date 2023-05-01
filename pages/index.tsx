import HomePage from "@/app/template/homePage";

export default function Home({data}:any) {
  return (
    <>
      <HomePage data={data} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:4000/data`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 10, //seconds
  };
}