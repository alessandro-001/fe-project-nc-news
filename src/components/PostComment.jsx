import { useEffect, useState } from "react";
import { postComment } from "../../utils";
import { useParams } from "react-router-dom";


function PostComment({setCommentSection, user}) {
    const [newComment, setNewComment] = useState('');
    const {article_id} = useParams()
    // const [isLoading, setIsLoading] = useState(true);

    function handleSubmit(event) {
        event.preventDefault();
        postComment(newComment, user.username, article_id)        
            .then((newCommentFromApi) => {
                setNewComment('')
                setCommentSection((currComments) => {
                    return [newCommentFromApi, ...currComments]
                })
            })
    }

    //LOADING STATE
    // if (isLoading) {
    //     return (
    //         <span className="loader"></span>
    //     )
    // }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <textarea
                    id="newComment"
                    multiline="true"
                    placeholder="Write something..."
                    type="text"
                    value={newComment}
                    onChange={(event)=>{setNewComment(event.target.value)}} >
                    </textarea>
                <br/>
                <button name="submit-comment-button" type="submit">Add Comment</button>
            </form>
        </>
    )
}

export default PostComment;