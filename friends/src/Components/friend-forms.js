import React from 'react';
import '../App.css';

const FriendForm = ({ friendInfo }) => {
    return(
        <div className='friendFormWrapper'>
            <h3>
                Make a new friend!
            </h3>


            
            <form>
                <input placeholder='Name'>
                
                </input>
            </form>            
            <form>
                <input placeholder='Age'>
                
                </input>
            </form>            
            <form>
                <input placeholder='email'>
                
                </input>
            </form>
            <button>Friendship made!</button>
            <h5>
                It's that easy!
            </h5>
        </div>

    )

}


export default FriendForm