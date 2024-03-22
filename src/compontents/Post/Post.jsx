import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,title}=post;
const nevigate = useNavigate();
    const handlerShowDitail= ()=>{
        nevigate(`/post/${id}`)
    }
    return (
        <div className="user">
            <h2>Post of id:{id}</h2>
            <h3>Tittl:{title}</h3>
            <Link to={`/post/${id}`}>
                <button className="btn">Post Ditails</button>
            </Link>
            <button onClick={handlerShowDitail} className="btn ">Click Ditails</button>
        </div>
    );
};

export default Post;