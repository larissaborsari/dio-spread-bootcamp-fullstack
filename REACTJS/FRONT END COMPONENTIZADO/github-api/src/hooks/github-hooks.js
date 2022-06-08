import { useContext } from "react";
import { gitHubContext } from "../providers/github-provider";

const useGithub = () => {
    const {githubState, getUser, getUserRepos, getUserStarred} = useContext(gitHubContext);
    return {githubState, getUser, getUserRepos, getUserStarred};
};

export default useGithub