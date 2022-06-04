import React, {createContext, useState, useCallback} from 'react'
import api from '../services/api';

export const gitHubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
})

function GitHubProvider({children}){

    const [githubState, setGithubState] = useState({
        loading: false,
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

    const getUser = (username) => {
        api.get(`users/${username}`).then(({data:{user}}) => {
           setGithubState(prevState => ({...prevState,user:{
                login: user.login,
                name: user.name,
                html_Url: user.html_Url,
                blog: user.blog,
                company: user.company,
                followers: user.followers,
                following: user.following,
                public_gists: user.public_gists,
                public_repos: user.public_repos,
           }}))
        })
    };

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        
    }

  return (
      <gitHubContext.Provider value={contextValue}>{children}</gitHubContext.Provider>
  )
}

export default GitHubProvider;