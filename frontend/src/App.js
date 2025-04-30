import { useState, useEffect } from 'react'; // import useEffect
 import List from './components/List';
 //import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

 import Stats from'./components/Stats';
 import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
    fetch('http://localhost:5000/api/contacts/')
    .then(response => response.json())
    .then(data => setTasks(data))
    .catch((error) => {
    console.error('Error:', error);
    });
    }, []);

    console.log("in App know tasks"+typeof(tasks));


    const [currentPage, setCurrentPage] = useState('z');

     const changePage = (page) => {
        setCurrentPage(page);
        };


    return (
       
       
            
    <div className='page'>
    

    <List heading='Contractor' tasks={tasks} setTasks={setTasks}/>

    <button onClick={() => changePage('home')}>Stats</button>

    {currentPage === 'home' && (
        <div>
          <h1>Stats</h1>
          <Stats />
        </div>
      )}
    
    
    </div>
    
    );
    } 

export default App;
