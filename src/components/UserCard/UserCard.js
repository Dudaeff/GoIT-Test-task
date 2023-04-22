import {
  Card,
  CardLogoWrapper,
  Profile,
  ProfileBackgroundWrapper,
  ProfileButton,
  ProfileAvatarThumb,
  ProfileAvatar,
  ProfileInfoList,
  ProfileInfoText,
} from './UserCard.styled';
import GoITLogo from 'images/logo.png';
import ProfileBackgroundImage from 'images/profile-background.png';
// import { useEffect, useState } from 'react';

export const UserCard = ({ user, onFollowClick, following }) => {
  const { followers, tweets, avatar, id } = user;

  return (
    <Card>
      <CardLogoWrapper>
        <img src={GoITLogo} alt="logo of the company GoIT" />
      </CardLogoWrapper>
      <ProfileBackgroundWrapper>
        <img
          src={ProfileBackgroundImage}
          alt="two chats, ask and answer dialogues"
        />
      </ProfileBackgroundWrapper>
      <Profile>
        <ProfileAvatarThumb>
          <ProfileAvatar src={avatar} alt="user profile avatar" />
        </ProfileAvatarThumb>
        <ProfileInfoList>
          <li>
            <ProfileInfoText>{tweets} tweets</ProfileInfoText>
          </li>
          <li>
            <ProfileInfoText>{followers} followers</ProfileInfoText>
          </li>
        </ProfileInfoList>
        <ProfileButton type="button" onClick={() => onFollowClick(id)}>
          {/* {isFollowed ? 'Following' : 'Follow'} */}
          Follow
        </ProfileButton>
      </Profile>
    </Card>
  );
};
