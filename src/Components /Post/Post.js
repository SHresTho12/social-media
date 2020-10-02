import React from 'react';
import { Button } from '@material-ui/core';
import './Post.css'
import { Link } from 'react-router-dom';
const Post = (props) => {
    const {title,id,userId,body} = props.post;
    return (
        <div className="postbg p-3">
            <div className="post card">
  <div className="image text-center"><img src={`https://randomuser.me/api/portraits/med/men/${id}.jpg`} className="card-img-top imageUser" alt="..."/></div>
  <div className="post card-body">
    <h3 className="card-title title">Title : {title}</h3>
    <p className="card-text">{body.slice(0, 100)}.....</p>
    <Link to={"/post/"+id}><Button className="px-3 bg-light">Learn more</Button></Link>
  </div>
</div>
        </div>
    );
};

export default Post;