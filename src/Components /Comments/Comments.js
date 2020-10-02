import React, { useEffect, useState } from 'react';
import './Comments.css'
import { Paper } from '@material-ui/core';
const Comments = (props) => {
    const {email,name,body,postId,id} = props.comment;
   
    
    return (
        <div >
           
            <Paper className="commentsection mt-4 p-3 d-flex">
            <div className="commenter"><img src={`https://randomuser.me/api/portraits/med/men/${id+1}.jpg`} className="card-img-top commenterImage" alt="..."/></div>
            <div className="detail ml-4">
                    <p>postId: {postId}</p>
                    <h5>Email: {email}</h5>
                    <h3>Name: {name}</h3>
                    <p><strong>Comment:</strong> {body}</p>
                </div>
            </Paper>
        </div>
    );
};

export default Comments;