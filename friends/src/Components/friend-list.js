import React from 'react';
import '../App.css';
import FriendIndividual from './friend-individual';



const FriendList = (props) => {
    return (
        <div>
            {props.arrayOfFriends.map(friend => (
                <FriendIndividual 
                    key = {friend.id}
                    friend = {friend}
                />
            ))}
        </div>
    )
}

export default FriendList