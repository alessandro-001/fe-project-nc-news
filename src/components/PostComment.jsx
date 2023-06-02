import { useEffect, useState } from "react";
import { postComment } from "../../utils";
import { useParams } from "react-router-dom";


function PostComment({setCommentSection, user}) {
    const [newComment, setNewComment] = useState('');
    const [postingComment, setPostingComment] = useState(false);

    const {article_id} = useParams()

    function handleSubmit(event) {
        event.preventDefault();
        setPostingComment(true);
        postComment(newComment, user.username, article_id)        
            .then((newCommentFromApi) => {
                setNewComment('')
                setCommentSection((currComments) => {
                    return [newCommentFromApi, ...currComments]
                });
                setPostingComment(false);
            })
            .catch((err) => {
                setPostingComment(false); 
                console.log(err);
              });
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
                    disabled={!newComment || postingComment}
                    >{postingComment ? "Posting..." : newComment ? "Comment!" : "Type Something"}</button>
            </form>
        </>
    )
}

export default PostComment;