import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { userDetails } from "../../recoil";

const AvatarProfile = styled.img`
  width: 250px;
  height: 300px;
  border-radius: 50%;
`;

const StyledText = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

const LinkToBio = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const FollowersFollowing = styled.span`
  font-size: 14px;
  font-family: "Times New Roman", Times, serif;
`;

const UserDetail = () => {
  const details = useRecoilValue(userDetails);
  const {
    avatar_url,
    name,
    login,
    bio,
    followers,
    following,
    company,
    location,
    blog,
    twitter_username,
  } = details;

  return (
    <div>
      <AvatarProfile src={`${avatar_url}`} alt={`profile_${name}`} />
      <StyledText>{name}</StyledText>
      <div>{login}</div>
      <LinkToBio>{bio}</LinkToBio>
      <FollowersFollowing>
        <b>{followers}</b> followers · <b>{following}</b> following
      </FollowersFollowing>
      <div>{company}</div>
      <div>{location}</div>
      <div>{blog}</div>
      <div>{twitter_username}</div>
    </div>
  );
};

export default UserDetail;
