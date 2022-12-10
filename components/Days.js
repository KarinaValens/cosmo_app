import {useState, useEffect} from 'react';

export default  function Days({schedule}) {

  //const {Midgard:{mon,tue,wen,thu,fri,sat,don}}=schedule;//it doesnt work with the props in child components 

  const [filter, setFilter] = useState("");

  const filtered = schedule.midgard.filter(day => Object.keys(schedule)===filter)

   // useEffect(callback, [dependencies]);

  return (
<>
    <ul className="grid">
    <button onClick={()=>setFilter(mon)} className="button">Monday</button>
    <button onClick={()=>setFilter(tue)} className="button">Thuesday</button>
    <button onClick={()=>setFilter(wed)} className="button">Wednesday</button>
    <button onClick={()=>setFilter(the)} className="button">Thursday</button>
    <button onClick={()=>setFilter(fri)} className="button">Friday</button>
    <button onClick={()=>setFilter(sat)} className="button">Saturaday</button>
    <button onClick={()=>setFilter(sun)} className="button">Sunday</button>
    </ul>
    </>)
  
}

