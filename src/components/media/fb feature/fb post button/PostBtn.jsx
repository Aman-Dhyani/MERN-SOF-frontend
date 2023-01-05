import React from 'react'
import './fbpostsbtn.css'
import refreshImg from '../../../../assets/refresh.png'
import { fetchFbPosts } from '../../../../Actions and Reducers/Actions/fbpostsAction'
import { useState } from 'react'

const PostBtn = ({ Avatar, avtStyles, user, dispatch, navigate }) => {

    const [rgtCntBot, setrgtCntBot] = useState("-26%")
    const [btnVal, setbtnVal] = useState("🔼")

    return (
        <>
            <div style={{ bottom: rgtCntBot }} className='right-cont'>
                <p onClick={() => rgtCntBot === "-26%" ? (setrgtCntBot("0%") || setbtnVal("🔽")) : (setrgtCntBot("-26%") || setbtnVal("🔼"))}>{btnVal}</p>
                <br />     <br />
                <div>
                    <div onClick={() => navigate('/fbpostform')} className="post-in-btn">
                        <p>+</p>
                    </div>
                </div>
                <div onClick={() => dispatch(fetchFbPosts())}>
                    <img className='fb-refresh-posts' src={refreshImg} alt="err" />
                </div>
            </div>
        </>
    )
}

export default PostBtn