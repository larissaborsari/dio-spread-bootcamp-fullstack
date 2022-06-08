import { useContext } from "react";
import { gitHubContext } from "../providers/github-provider";

const useGithub = () => {
    const {githubState, getUser, getUserRepos} = useContext(gitHubContext);
    return {githubState, getUser, getUserRepos};
};

export default useGithub