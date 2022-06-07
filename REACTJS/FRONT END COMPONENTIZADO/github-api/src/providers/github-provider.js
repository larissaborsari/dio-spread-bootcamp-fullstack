import React, {createContext, useState, useCallback} from 'react';
import api from '../services/api';

export const gitHubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
})

function GitHubProvider({children}){

    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            avatar: undefined,
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
        setGithubState((prevState) => ({...prevState,
            loading: !prevState.loading
        }));
        
        api.get(`users/${username}`).then(({data}) => {

           setGithubState(prevState => ({...prevState, hasUser:true, user:{
                avatar: data.avatar_url,
                login: data.login,
                name: data.name,
                html_Url: data.html_Url,
                blog: data.blog,
                company: data.company,
                followers: data.followers,
                following: data.following,
                public_gists: data.public_gists,
                public_repos: data.public_repos,
           }}))
        }).finally(() => {
            setGithubState((prevState) => ({...prevState,
                loading: !prevState.loading
            }))});
        };


    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),  
    };

    return (
      <gitHubContext.Provider value={contextValue}>{children}</gitHubContext.Provider>
    )

    };


export default GitHubProvider;