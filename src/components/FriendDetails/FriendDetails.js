import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const FriendDetails = () => {
    const {friendId} = useParams()
    const [friend, setFriend] = useState({});
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then( res => res.json())
        .then( data => setFriend(data))
    }, [])
    
    const {name, email, website, phone} = friend;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>email: {email}</p>
            <p>Website: {website}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default FriendDetails;