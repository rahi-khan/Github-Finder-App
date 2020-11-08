import UserItem from "./UserItem";
import Spinner from "../layout/spinner/Spinner";
import { useContext } from "react";
import GithubContext from "../../context/githubContext";

const Users = () => {
    const githubContext = useContext(GithubContext);

    return githubContext.loading ? (
        <Spinner />
    ) : (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: "1rem",
            }}
        >
            {githubContext.users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
};
export default Users;
