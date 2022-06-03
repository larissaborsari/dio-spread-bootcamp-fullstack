import React, {createContext, useState} from 'react'

export const gitHubContext = createContext({
    user: {},
    repositories: [],
    starred: [],
})

function GitHubProvider({children}){

    const [githubState, setGithubState] = useState({
        user: {
            login: undefined,
            name: undefined,
            html_Url: undefined,
            blog: undefined,
            company: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    });

    const contextValue = {
        githubState,
    }

  return (
      <gitHubContext.Provider value={contextValue}>{children}</gitHubContext.Provider>
  )
}

export default GitHubProvider;