import React from 'react';
import * as S from './styled';

function Profile() {
  return (
    <S.Wrapper>
        <S.WrapperImage src="https://avatars.githubusercontent.com/u/81311347?v=4" alt="User Avatar"/>
        <S.WrapperInfoUser>
            <div>
            <h1>Larissa Borsari</h1>
            <S.WrapperUserName>
                <h3>Username: </h3>
                <a href="https://github.com/larissaborsari" target="_blank" rel="noreferrer">larissaborsari</a>
            </S.WrapperUserName>
             
        </div>
            <S.WrapperStatusCount>
            <div>
                <h4>Followers: </h4>
                <span>2</span>
                </div>
            <div>
                <h4>Starred: </h4>
                <span>2</span>
            </div>
            <div>
                <h4>Following: </h4>
                <span>2</span>
            </div>
            </S.WrapperStatusCount>
        </S.WrapperInfoUser>
    </S.Wrapper>
  );
}

export default Profile;