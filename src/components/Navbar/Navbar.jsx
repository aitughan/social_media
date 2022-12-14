import React from "react";
import classes from'./Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar =()=>{
    return(
        <nav className={classes.nav}>
      <div className={classes.item}>
       <NavLink to="/profile" >Profile</NavLink>
      </div>
      <div className={classes.item}>
       <NavLink to="/dialogs" >Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users" >Users</NavLink>
      </div>
      <div className={classes.item}>
       <NavLink to="/news" >News</NavLink>
      </div>
      <div className={classes.item}>
       <NavLink to="/musics">Music</NavLink>
      </div>
    </nav>
    )
}
export default Navbar