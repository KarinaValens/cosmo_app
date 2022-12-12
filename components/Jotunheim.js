
export default function Jotunheim({schedule, filter}) {

  const stageName = Object.keys(schedule); //this gives me the names (keys) of the stages
    
  const jotunheim = schedule.Jotunheim[filter];  //dynamic [] gives me every data after Jotunheim in this case the obj days with their object shows


    return (
      <>
        <h3 className="accent2">{stageName[2]}</h3>
         <div className="show-table">  
          {jotunheim.map((show=>{
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
  
   