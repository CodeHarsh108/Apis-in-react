import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // Initially not loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => setData(json))

  // }, []);

  useEffect(() => {
  setLoading(true); // Set loading to true before fetching
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setData(json)) 
  }, [])

  return (
    <div>
      <h1>API's</h1>
      {/* <p>Title : {data.title}</p>
      <p>{data.completed ? 'Completed' : 'Not Completed'}</p>
      <p>User ID: {data.userId}</p>
      <p>ID: {data.id}</p>
      <p>Data fetched at: {new Date().toLocaleTimeString()}</p>
      <p>Data fetched at: {new Date().toLocaleDateString()}</p> */}
      <ul>
  {data.map((post) => (
    <li key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>Post ID: {post.id}</p>
      <p>User ID: {post.userId}</p>
      <p>Data fetched at: {new Date().toLocaleTimeString()}</p>
      <p>Data fetched at: {new Date().toLocaleDateString()}</p>
    </li>
  ))}
</ul>

    </div> 
  )
}

export default App
