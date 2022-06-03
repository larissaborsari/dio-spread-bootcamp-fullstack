import React, {createContext} from 'react'

export const gitHubContext = createContext({
    user: {},
    repositories: [],
    starred: [],
})

function GitHubProvider() {

    const [githubState, setGithubState] = useState({
        user: {
            login: undefined,
            name: undefined,
            publicUrl: undefined,
            blog: undefined,
            company: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        }
        repositories: [],
        starred: [],
    });
  return <div>GitHubProvider</div>

}

export default GitHubProvider