import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    console.log(props);
    const history = useHistory()
    const handleDetail = (friendId) => {
        history.push(`/friend/${friendId}`)
    }
    const {name, email, id} = props.friend;
    const friendStyle = { border: '1px solid blue', 
                          margin: '10px', 
                          borderRadius: '20px',
                          padding: '10px'}
    
    return (
        <div style ={friendStyle}>
            <h2>{name}</h2>
            <h4>{email}</h4>
            <Link to ={`friend/${id}`}> Show details of id {id}</Link>

            <button onClick={ () => handleDetail(id)}>Click Me</button>

        </div>
    );
};

export default Friend;