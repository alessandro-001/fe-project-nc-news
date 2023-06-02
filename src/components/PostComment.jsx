import { useEffect, useState } from "react";
import { postComment } from "../../utils";
import { useParams } from "react-router-dom";


function PostComment({setCommentSection, user}) {
    const [newComment, setNewComment] = useState('');
    const {article_id} = useParams()

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
                <button 
                    name="submit-comment-button" 
                    type="submit"
                    disabled={!newComment}
                    >Add Comment</button>
            </form>
        </>
    )
}

export default PostComment;