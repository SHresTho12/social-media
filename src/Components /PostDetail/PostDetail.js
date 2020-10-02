import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostShow from '../PostShow/PostShow';

const PostDetail = () => {
    let {id} = useParams();
    const uid = id;
    const [posts , setPosts ] =useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data => setPosts(data))
    });





   
     

    return (
      <div>
           <PostShow post = {posts}></PostShow>
       
      </div>
    );
};

export default PostDetail;