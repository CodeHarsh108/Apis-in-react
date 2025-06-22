import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true); 
    
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/users')
    ])
      .then(axios.spread((postsResponse, usersResponse) => {
          const posts = postsResponse.data;
          const users = usersResponse.data;
          const postsWithUser = posts.map(post => ({
            ...post,
            user: users.find(user => user.id === post.userId)
          }));
          setData(postsWithUser); // Set the combined data
          setLoading(false); // Set loading to false after data is fetched
        })      )
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
      <ul>
        {data.map((post) => (
          <li key={post.user.id}>
            <h3>{post.user.name}</h3>
            <p>Email: {post.user.email}</p>
            <p>Phone: {post.user.phone}</p>
            <p>Website: {post.user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
