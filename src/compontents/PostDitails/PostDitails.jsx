import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDitails = () => {
    const post = useLoaderData();
    const {postId} = useParams()
    const navigate= useNavigate();
    const {id,title,body}= post;
    console.log(postId)
    const handleGoBack =() =>{
        navigate(-1);
    }
    return (
        <div className="user">
            <h1>Post Id:{id}</h1>
            <h2>Post Title:{title}</h2>
            <p>{body}</p>
            <button onClick={handleGoBack} className="btn">Go Back</button>
        </div>
    );
};

export default PostDitails;