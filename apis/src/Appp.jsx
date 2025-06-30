import axios from 'axios';
import './App.css';
import React, { useState } from 'react';

function Appp() {
    const [data, setData] = useState();


    const handleSubmit = (event) => {
        event.preventDefault();
        const newpost = {
            'title': 'New Post',
            'body': 'This is the body of the new post',
            'userId': 1
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', newpost)
        .then(response => {
            console.log('Post added successfully:', response.data);
            setData([response.data]);
        })
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Add Post</button>
            </form>
        </div>
    );
}

export default Appp;