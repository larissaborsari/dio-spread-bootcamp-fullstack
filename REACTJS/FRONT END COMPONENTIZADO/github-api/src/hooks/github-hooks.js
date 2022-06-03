import { useContext } from "react";
import { gitHubContext } from "../providers/github-provider";

const useGithub = () => {
    const {githubState} = useContext(gitHubContext);
    return {githubState};
};

export default useGithub