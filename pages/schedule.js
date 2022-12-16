
export default function Schedule({schedule}){
const stages= Object.keys(schedule);
const dailySchedule=Object.values(schedule);
const dailyActs= Object.entries(schedule);
console.log(dailyActs);

return (
    <>
    <h2>{stages[0]}</h2>
        <div className="show-table">  
            {schedule.Midgard.mon.map((show=>{
            //getting the data for just Monday (one day) destructuring object inside objects
            return (
              <>          
                <ul >
                    <li key="z">Act: {show.act}</li> 
                    <li key="y">starts: {show.start}</li> 
                    <li key="x">ends:{show.end}</li> 
                </ul>           
            </>
            )
            }))}</div>


    </>
)

}



export async function getServerSideProps() {
    // Get data from api
    const res = await fetch("http://localhost:8080/schedule");
    const data = await res.json();
    
    // Return the data inside props
    return {
      props: {
        schedule: data,
      }
    }
  }