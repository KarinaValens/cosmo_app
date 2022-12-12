
export default function Midgard({schedule , filter}) {

  const stageName = Object.keys(schedule);
  //the following line is destructuring nested object and it gives me back the content from Midgar
  //const { Midgard : {mon, tue , wen , thu , fri , sat ,sun}}= schedule;

  const midgard = schedule.Midgard[filter];//dynamic [] gives me every data after Midgard in this case the obj days with their object shows
  
  return (
    <>
      <h3 className="accent2">{stageName[0]}</h3>
       <div className="show-table">  
        {midgard.map((show=>{
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

 