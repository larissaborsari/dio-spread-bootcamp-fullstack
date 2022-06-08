import React from 'react';
import * as S from './styled';


function RepositoryItem({name, linkToRepo, fullName}) {
  return (
    <S.Wrapper>
        <S.WrapperTittle>{name}</S.WrapperTittle>
        <S.WrapperFullName>Full Name:</S.WrapperFullName>
        <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">{fullName}</S.WrapperLink>
    </S.Wrapper>
  )
}

export default RepositoryItem