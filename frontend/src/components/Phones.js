import { useState,useEffect } from 'react';
import '../App.css';



function Task(props) {

	console.log(props);
	const contactId=props.contactId;

	

	function onChange() {
		const updatedTask = {
		phoneid: props.phoneid,
		contactId: props.contactId,
		phonetype: props.phonetype,
		phonenumber: props.phonenumber
		// description: props.description,
		// completed: !props.completed
		};
		fetch(`http://localhost:5000/api/contacts/${props.contactId}/phones/${props.id}`, {
		method: 'PUT',
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify(updatedTask)
		})
		.then(response => response.json())
		.then(() => {
		props.setTemp(temp => temp.map(task => {
		if (task.id === props.phoneid) {
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

	function onClick() {
		// Find the task we want to delete and remove it
		fetch(`http://localhost:5000/api/contacts/${props.contactId}/phones/${props.phoneid}`,{
			method: 'DELETE',
		})
		.then(()=>{
			props.setTemp(temp => temp.filter(task => task.id !== props.phoneid));
		})
		.catch((error) => {
			console.error('Error:', error);
		});
		

		
	}

	return (
		<li> 
			
			<table>
			<tr>
                <th>Phone Type</th>
                <th>Phone number</th>
				<td><button type="button" class="button1" onClick={onClick} onChange={onChange}>Delete</button></td>
            </tr>
				<tr>
					<td>
					{ props.phonetype }
					</td>
					<td>
					{props.phonenumber} 
					</td>
					
				</tr>
			</table>
			    

		</li>
	);
}

function Phone(props) {

	console.log("hey checking if it is array first time "+Array.isArray(props.temp));
	
	const [newTask, setNewTask] = useState("");
    const [newTask1, setNewTask1] = useState("");
	const contactId = props.contactId;
	console.log("in Phone"+typeof(props.temp));

	
 
	console.log(typeof(props.temp));
	//const [Id,setId] =useState("");

	function onChange(event) {
		setNewTask(event.target.value);
	}
	function onChange1(event) {
		setNewTask1(event.target.value);
		//setcontactId(props.contactId);
		
	}
	const data = ['apples', 'bananas', 'oranges', 'grapes']


	function onClick() {
		fetch(`http://localhost:5000/api/contacts/${props.contactId}/phones/`, {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify({  phonetype: newTask, phonenumber: newTask1, contactId: contactId })
		})
		.then(response => response.json())
		.then(data => {
		props.setTemp(temp => [...temp, data]);
		})
		.catch((error) => {
		console.error('Error:', error);
		});
		setNewTask(""); // Clear the input field
		window.location.reload(false);
		}

		
		

		

		console.log("hey checking if it is array "+Array.isArray(props.temp));

	return (
		<div>
			<h2><i >Contact Name </i> : { props.contactname } </h2>
			<input type="text" placeholder="Add phonetype" onChange={onChange} required />
            <input type="text" placeholder="Add phone number" onChange={onChange1} required />
			<button type="button" class="button" onClick={onClick} >Add number and type</button>
			
			<ul>

				
				{ props.temp.map(task => <Task setTemp={props.setTemp} phoneid={task.id} phonetype={task.phonetype} phonenumber={task.phonenumber} contactId={contactId}  />) }
				

				{/* { props.temp.map(task => <Task setTemp={props.setTemp} phoneid={task.phoneid} contactname={task.contactname}   phonetype={task.phonetype}  />) } */}
				{/* { props.temp.map(task => <Task setTasks={props.setTasks} id={task.id} contactId={contactId}  />) }

				 */}

				

			</ul>

			


		</div>
	);
}

export default Phone;
