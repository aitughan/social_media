import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo =() =>{
        return(
            <div>
                <div>
                    <img className={classes.img} src="https://avatars.mds.yandex.net/i?id=45570b0a63c019f8c9e75fe5d716802e-4960217-images-thumbs&n=13">

                    </img>
                </div>
                <div>
                    <p className={classes.fullname}>Antonie Griezmann</p>
                </div>
            </div>
        )
}

export default ProfileInfo