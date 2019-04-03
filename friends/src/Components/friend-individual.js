import React  from 'react';
import '../App.css';



const FriendIndividual = (props) => {
    return (
        <div className="individual-friend-wrapper">
            <p>
                <span>Ranking</span>: {props.friend.id} out of 6
            </p>
            <p>
                <span>Name</span>: {props.friend.name}
            </p>
            <p>
                <span>Age</span>: {props.friend.age}
            </p>
            <p>
                <span>email</span>: {props.friend.email}
            </p>
        
        </div>
    )
}

export default FriendIndividual