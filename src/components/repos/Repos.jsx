import { useContext } from "react";
import GithubContext from "../../context/githubContext";
import RepoItem from "./RepoItem";

const Repos = () => {
    const githubContext = useContext(GithubContext);

    return githubContext.repos.map(repo => (
        <RepoItem repo={repo} key={repo.id} />
    ));
};
export default Repos;
