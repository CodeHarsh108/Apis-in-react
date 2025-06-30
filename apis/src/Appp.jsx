import axios from 'axios';
import './App.css';
import { useState } from 'react';

axios.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
});

function Appp() {
    const [data, setData] = useState(null); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newPost = {
            title: 'New Post',
            body: 'This is the body of the new post',
            userId: 1
        };

        try {
            const response = axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
            console.log('Post added successfully:', response.data);
            setData(response.data);
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <button type='submit'>Add Post</button>
            </form>

            {data && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Response:</h3>
                    <p><strong>Title:</strong> {data.title}</p>
                    <p><strong>Body:</strong> {data.body}</p>
                    <p><strong>ID:</strong> {data.id}</p>
                </div>
            )}
        </div>
    );
}

export default Appp;
