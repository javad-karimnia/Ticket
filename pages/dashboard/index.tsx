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
      const res = await fetch('http://localhost:4000/tickets');
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