import React from "react";
import classes from'./MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts =(props) =>{
  let postElement =props.postData.map((p)=>
  <Post messages={p.message} likesCount={p.likesCount}/>)
  let newPostElement = React.createRef();
  let addPost =() =>{
      props.addPost();
  }
  let onPostChange =() =>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text)

  }
    return(
      <div>My Post
        <div>
          
               <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} className={classes.postinput} />
              <br></br> aitu</div><div>
              <button onClick={addPost} className={classes.btnaddpost} >Add Post</button> 
          
        </div>
        <div>
          {postElement}
        </div>
      </div>
    
    )
}

export default MyPosts