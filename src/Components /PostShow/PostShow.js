import React, { useEffect, useState } from 'react';
import Comments from '../Comments/Comments';
const PostShow = (props) => {
    const{title,id,body} = props.post;
    const [comments, setComments] = useState([]);
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, []);
    const commentFilter = comments.filter(com => com.postId === id);
    
    return (
        <div>
            <div className="postbg p-3">
            <div className="post card">
  <div ><img src={`https://randomuser.me/api/portraits/med/men/${id}.jpg`} className="card-img-top imageUser" alt="..."/></div>
  <div className="post card-body">
    <h2 className="card-title title">Title : {title}</h2>
    <p className="card-text">{body}</p>
    
  </div>
</div>
        </div>
        <div>
            <h2>Comments</h2>
        {commentFilter.map(cmnt => 
                       
                           <Comments comment={cmnt} ></Comments>
                       
                   )}
        </div>
        </div>
    );
};

export default PostShow;