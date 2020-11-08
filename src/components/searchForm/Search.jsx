import { useContext, useState } from "react";
import AlertContext from "../../context/alertContext";
import GithubContext from "../../context/githubContext";

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [search, setsearch] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (search === "") {
            alertContext.setAlert("Please enter something", "light");
        } else {
            githubContext.searchUsers(search);
            setsearch("");
        }
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="text"
                    value={search}
                    placeholder="Search Users..."
                    onChange={e => setsearch(e.target.value)}
                />

                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />

                {githubContext.users.length > 0 && (
                    <button
                        className="btn btn-light btn-block"
                        onClick={githubContext.clearUsers}
                    >
                        Clear
                    </button>
                )}
            </form>
        </div>
    );
};

export default Search;
