import React, { useEffect, useState } from 'react';
import * as S from './styled';
import RepositoryItem from '../repository-item';
import useGithub from '../../hooks/github-hooks';

function Repositories() {
    const {githubState, getUserRepos} = useGithub();

    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login){
            getUserRepos(githubState.user.login);
        }
        setHasUserForSearchRepos(githubState.repositories);
    }, [githubState.user.login])


  return ( 
    <>
    {hasUserForSearchRepos ? ( 
        <S.WrapperTabs
            selectedTabClassName = "is-selected"
            selectedTabPanelClassName="is-selected" >
                <S.WrapperTabList>
                    <S.WrapperTab>
                        Repositories
                    </S.WrapperTab>
                    <S.WrapperTab>
                        Starred
                    </S.WrapperTab>
                </S.WrapperTabList>
                <S.WrapperTabPanel>
                    {githubState.repositories.map(item => (
                        <RepositoryItem 
                            key={item.id}
                            name={item.name}
                            linkToRepo= {item.html_url}
                            fullName={item.full_name}/>
                    ))}
                </S.WrapperTabPanel>
                <S.WrapperTabPanel>
                    {githubState.starred.map(item => (
                        <RepositoryItem 
                        key={item.id}
                        name={item.name}
                        linkToRepo= {item.html_url}
                        fullName={item.full_name}/>
                    ))}
                </S.WrapperTabPanel>
        </S.WrapperTabs> ):( <></>) }
    </>
  );
};

export default Repositories