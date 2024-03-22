import { Link } from "react-router-dom";
import "./User.css";
const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="user">
      <h2>Name:{name}</h2>
      <p>Email:{email}</p>
      <p>Phone:{phone}</p>
      {/* <Link to={`/user/${id}`}>Show Ditails</Link> */}
      <Link to={`/user/${id}`}>
        <button className="btn">Click Me</button>
      </Link>
    </div>
  );
};

export default User;
