import React, { useEffect, useState } from 'react';
import Post from '../Post/Post'
const PostHolder = () => {
    const [post,setPost] = useState([])
        useEffect(()=>{
            
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => setPost(data))



        },[])

    return (
        
        <div>
          {
              post.map(pd =>{ return <Post post = {pd}></Post>}

              )
          }  
        </div>
    );
};

export default PostHolder;