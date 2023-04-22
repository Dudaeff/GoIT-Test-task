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
import { setFollowUser, setUnFollowUser } from 'services/usersAPI';
// import { fetchUsers } from 'services/usersAPI';
// import { useEffect, useState } from 'react';

export const UserCard = ({ user }) => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   if (users.length === 0)
  //     fetchUsers()
  //       .then(users => setUsers(users))
  //       .catch(error => console.error(error.message));
  // }, [users.length]);

  const { followers: followersQty, tweets, avatar, id } = user;

  const onFollowButtonClick = id => {
    setFollowUser(id, { followers: followersQty + 1 });
    setUnFollowUser(id, { followers: followersQty - 1 });
    // console.log(id);
  };

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
            <ProfileInfoText>{followersQty} followers</ProfileInfoText>
          </li>
        </ProfileInfoList>
        <ProfileButton type="button" onClick={() => onFollowButtonClick(id)}>
          Follow
        </ProfileButton>
      </Profile>
    </Card>
  );
};
