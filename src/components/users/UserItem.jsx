import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
    return (
        <div className="card text-center">
            <img
                src={avatar_url}
                alt="user avatar"
                className="round-img"
                style={{ width: "60px" }}
            />

            <h3>{login}</h3>

            <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                More
            </Link>
        </div>
    );
};

export default UserItem;
