import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true); 
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data); // Set the fetched data to state
        setLoading(false); // Set loading to false after fetching
  })
      .catch(
        (error) =>{
          console.error('Error fetching data:', error);
          setError(error); // Set error state if fetch fails
          setLoading(false); // Set loading to false even if there's an error
        }
      );
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Keep your return logic the same
  }
  if (error) {
    return <div>Error: {error.message}</div>; // Display error message if there's an error
  }

  return (
    <div>
      <h1>API's</h1>
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
  );
}

export default App;
