import { useState, useEffect } from 'react'; // import useEffect
import '../App.css';


function Stats(){

    const [count1, setCount1] = useState("");
    const [count2, setcount2] = useState("");

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
    fetch('http://localhost:5000/api/stats/')
    .then(response => response.json())
    .then(data => setTasks(data))
    .catch((error) => {
    console.error('Error:', error);
    });
    }, []);

    function onClick(){
        window.location.reload(false);
    }


    

    return(
        <div>

           

              <table>
        <tr>
                     <th>Number of Contacts</th>
                     <th>Number of phones</th>


                 </tr>
                 <tr>
                     <td>{tasks.count1}</td>
                     <td>{tasks.count2}</td>
    </tr>
             </table>

             <button type="button" className="button" onClick={onClick}> Refresh</button>
            
        </div>
    )
}

export default Stats;