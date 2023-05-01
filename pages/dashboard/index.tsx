import DashboardPage from "@/app/template/DashboardPage";

const Dashboard = ({ ticket, Errors }:any) => {
    return (
        <>
            <DashboardPage Ticket={{ ticket, Errors }} />
        </>
    );
};

export default Dashboard;

export async function getStaticProps() {

    try {
      const res = await fetch(`${process.env.BASE_URL}/tickets`);
      const ticket = await res.json();
  
      return {
        props: { ticket },
        revalidate: 10, //seconds
      };
    } catch (error:any) {
      
      return {
        props: { Errors: error.message },
      };
  
    }
  
} 