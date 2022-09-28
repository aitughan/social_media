import React from "react";
import classes from './Post.module.css'



const Post =(props) =>{

    return(
      
      <div className={classes.post}>
        <p className={classes.p}>
        <img className={classes.img} src="https://avatars.mds.yandex.net/i?id=45570b0a63c019f8c9e75fe5d716802e-4960217-images-thumbs&amp;n=13"></img>

          {props.messages}<br></br>{props.likesCount} likes</p>
      </div>
    
    )
}
export default Post