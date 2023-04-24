import { useDispatch } from 'react-redux';
import { followUser, unfollowUser } from 'redux/users/operations';
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

export const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const { followers, tweets, avatar, id, isFollowing } = user;

  const onFollowBtnClick = userId => {
    if (!isFollowing) {
      dispatch(followUser(userId));
    } else {
      dispatch(unfollowUser(id));
    }
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
            <ProfileInfoText>
              {followers?.toLocaleString('en-US')} followers
            </ProfileInfoText>
          </li>
        </ProfileInfoList>
        <ProfileButton
          type="button"
          className={isFollowing && 'active'}
          onClick={() => onFollowBtnClick(id)}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </ProfileButton>
      </Profile>
    </Card>
  );
};
