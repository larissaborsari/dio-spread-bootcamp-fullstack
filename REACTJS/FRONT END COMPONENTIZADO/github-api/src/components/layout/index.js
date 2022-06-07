import React from 'react';
import * as S from './styled';
import Header from '../header';
import useGithub from '../../hooks/github-hooks';


function Layout({children}) {

  const {githubState} = useGithub();


  return (
    <S.WrapperLayout>
        <Header></Header>
        {children}
    </S.WrapperLayout>
  )
}

export default Layout