import React from 'react'
import { Avatar } from '@mui/material'

function Post({username, caption, imageUrl}) {
  return (
   <div className='post'>
    <div>
            <Avatar 
            alt= {username}
            src = 'none'
            />
            <h3>{username}</h3>
      </div>
            <img alt={caption} src={imageUrl}></img>
            <h4 className='post__caption'> <strong>{username}:</strong> {caption}</h4>
   </div>
  )
}

export default Post
