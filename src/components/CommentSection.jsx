import { useState, useEffect } from "react";
import { fetchComments } from "../../utils";
import React from 'react';


/*  FETCHING THE COMMENTS TO DISPLAY  */

function CommentSection({article_id}) {
    const [commentSection, setCommentSection] = useState([])
    const [isLoading, setIsLoading] = useState(true);

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
            <p className="loading-state">Loading...</p>
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
                <p>By: {author} | {created_at}</p>
                <br/>
            </li> 
            ))}
        </ul>       
        </>
    )
}

export default CommentSection;