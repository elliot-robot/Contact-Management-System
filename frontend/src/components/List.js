import { useState, useEffect } from 'react'; // import useEffect
import Phone from './Phones';
import '../App.css';
import Stats from'./Stats';


function Task(props) {


	const [temp, setTemp] = useState([]);
	//const [contactId, setcontactId] = useState("");
	const contactId=props.id;

	//console.log("hey checking if it is array in list "+Array.isArray(props.temp));
	//setcontactId({props.id})
	//console.log(contactId)
    useEffect(() => {
    fetch(`http://localhost:5000/api/contacts/${props.id}/phones/`)
    .then(response => response.json())
    .then(data => setTemp(data))
    .catch((error) => {
    console.error('we got Error:', error);
    });
    }, []);

	console.log(props);
	

	function onChange() {
		const updatedTask = {
		id: props.id,
		contactname: props.contactname,
		
		};
		fetch(`http://localhost:5000/api/contacts/${props.id}/`, {
		method: 'PUT',	
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify(updatedTask)
		})
		.then(response => response.json())
		.then(() => {
		props.setTasks(tasks => tasks.map(task => {
		if (task.id === props.id) {
		return updatedTask;
		} else {
		return task;
		}
		}));
		})
		.catch((error) => {
		console.error('Error:', error);
		});
		}
		console.log("inlist know tasks"+typeof(tasks));

	function onClick() {
		// Find the task we want to delete and remove it
		fetch(`http://localhost:5000/api/contacts/${props.id}`,{
			method: 'DELETE',
		})
		.then(()=>{
			props.setTasks(tasks => tasks.filter(task => task.id !== props.id));
		})
		.catch((error) => {
			console.error('Error:', error);
		});
		window.location.reload(false);

		
	}

	return (
		<li>
			<br/>
			<br/>
			<table>
			<tr>
				<td><center><button type="button" class="button1" onClick={onClick} onChange={onChange}>Delete </button></center></td>
			 </tr>
			<tr>
   				<td> <Phone heading='Phones' temp={temp} setTemp={setTemp} contactId={contactId} contactname={props.contactname} /></td>
			</tr>
					</table>
		</li>
	);
}

function List(props) {


	

	const [newTask, setNewTask] = useState("");
	const [id,setId] = useState("");

	//setId({task.id})

	function onChange(event) {
		setNewTask(event.target.value);
	}



	function onClick() {
		fetch('http://localhost:5000/api/contacts/', {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify({  contactname: newTask })
		})
		.then(response => response.json())
		.then(data => {
		props.setTasks(tasks => [...tasks, data]);
		})
		.catch((error) => {
		console.error('Error:', error);
		});
		setNewTask(""); // Clear the input field
		window.location.reload(false);
		}

	return (
		<div>


			
			<center><h1 >{ props.heading }</h1></center>
			

			<table class="center">
				<tr>
					<td colSpan={3}><h2><center>Contacts</center></h2></td>
				</tr>
			<tr >
			<td colSpan={2}><input type="text" placeholder="Add a new Contact" onChange={onChange} required /></td>
			
			
			<td> <button type="button" class="button" onClick={onClick}> Create Contact</button></td>
			</tr>
			<tr>
			<ul>
				{ props.tasks.map(task => <Task setTasks={props.setTasks} id={task.id} contactname={task.contactname}   />) }
				
			</ul>	
			</tr>

			{/* <tr>
				<td><center><Stats/></center></td>
			</tr> */}

			



			</table>	


		</div>
	);
}

export default List;
