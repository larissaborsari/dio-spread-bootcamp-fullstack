import { useContext } from "react";
import { gitHubContext } from "../providers/github-provider";

const useGithub = () => {
    const {githubState, getUser} = useContext(gitHubContext);
    return {githubState, getUser};
};

export default useGithub