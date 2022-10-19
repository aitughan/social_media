import axios from "axios";
import React from "react";
import userphoto from "../../assets/img/147142.png"

const Users = (props) => {
    if(props.users.length===0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{

            props.setUsers(response.data.items)
        })
        
    }
   
   
    return<div> 
              {props.users.map(u => <div key={u.id}>
                <img src={u.photos.small!==null ? u.photos.large : userphoto} style={{width: "100px", height: "100px"}} alt={`${u.name} avatar`}></img>
                <p>{u.name}</p>
                {u.followed ? <button onClick={()=>{ props.unfollow(u.id)}}>Unfollow</button> : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
              </div> )}
    </div>

    
}
 
export default Users;