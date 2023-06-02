import { useState, useEffect } from "react";
import { fetchComments } from "../../utils";
import React from 'react';
import moment from 'moment'
import { useParams } from "react-router-dom";


/*  FETCHING THE COMMENTS TO DISPLAY  */

function CommentSection({commentSection, setCommentSection}) {
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();

    useEffect(() => {
        fetchComments(article_id)
            .then(({ comments }) => {
                if(comments.length === 0) {
                    setCommentSection('No comments available')
                    setIsLoading(false)
                } else {
                    setCommentSection(comments)
                    setIsLoading(false)
                }
            })
    }, []);


    //LOADING STATE
    if (isLoading) {
        return (
            <span className="loader"></span>
        )
    }

    //RENDERING
    return (
        <>
        <h3>Comments:</h3>
        <ul>
            {commentSection.map(({ comment_id, author, body, votes, created_at }) => (
            <li key={comment_id}>
                <p>{body}</p>
                <p>Votes: {votes}</p>
                <small>By: {author} | Posted on: {moment(`${created_at}`).format("Do MMMM YYYY")}{" "}</small>
                <br/><br/>
            </li> 
            ))}
        </ul>       
        </>
    )
}

export default CommentSection;