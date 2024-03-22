import { useLoaderData } from "react-router-dom";

const UserDitails = () => {
  const user = useLoaderData();
const {name,website}=user
  return (
    <div>
      <h1>Show user Ditails:{name} </h1>
      <p>Visit us : {website}</p>
    </div>
  );
};

export default UserDitails;
