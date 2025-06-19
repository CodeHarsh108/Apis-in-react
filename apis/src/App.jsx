import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(json))

  }, []);

  return (
    <div>
      <h1>API's</h1>
      <p>Title : {data.title}</p>
      <p>{data.completed ? 'Completed' : 'Not Completed'}</p>
      <p>User ID: {data.userId}</p>
      <p>ID: {data.id}</p>
      <p>Data fetched at: {new Date().toLocaleTimeString()}</p>
      <p>Data fetched at: {new Date().toLocaleDateString()}</p>
    </div> 
  )
}

export default App
