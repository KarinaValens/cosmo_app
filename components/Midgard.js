
export default function Midgard({schedule}) {

  const stageName = Object.keys(schedule);

//the following line is destructuring nested object and it gives me back the content from Midgar
  const { Midgard : {mon, tue , wen , thu , fri , sat ,sun}}= schedule;

  return (
    <>
      <h3>{stageName[0]}</h3>
       <div className="show-table">  
        {mon.map((show=>{
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

 