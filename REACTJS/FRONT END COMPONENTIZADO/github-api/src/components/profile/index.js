import React from 'react';
import * as S from './styled';

function Profile() {
  return (
    <S.Wrapper>
        <div>
            <img src="https://avatars.githubusercontent.com/u/81311347?v=4" alt="User Avatar"/>
            <h1>Larissa Borsari</h1>
            <h3>Username: </h3>
            <span>larissaborsari</span>
        </div>
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
    </S.Wrapper>
  );
}

export default Profile;