
export default function Vanaheim({schedule, filter}) {

    const stageName = Object.keys(schedule);
  
  const vanaheim = schedule.Vanaheim[filter];//dynamic [] gives me every data after Vanaheim in this case the obj days with their object shows
  
    return (
      <>
        <h3 className="accent2">{stageName[1]}</h3>
         <div className="show-table">  
          {vanaheim.map((show=>{
          //getting the data for just Monday (one day) destructuring object inside objects
          return (
          <>          
              <ul >
                  <li className="accent2" key="z">Act: {show.act}</li> 
                  <li key="y">starts: {show.start}</li> 
                  <li key="x">ends:{show.end}</li> 
              </ul>           
          </>
          )
          }))}</div> 
   
      </>
    )
  }
  
   