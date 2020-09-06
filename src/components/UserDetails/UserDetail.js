import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { userDetails, localUser } from "../../recoil";
import blogIcon from "../../assets/icons/blog.svg";
import companyIcon from "../../assets/icons/company.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import locationIcon from "../../assets/icons/location.svg";
import followersFollowingIcon from "../../assets/icons/followersFollowingIcon.svg";

const UserDetailContainer = styled.div`
  width: 30%;
  min-width: 252px;
`;

const AvatarProfile = styled.img`
  width: 250px;
  height: 250px;
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
  display: flex;
  font-size: 14px;
  align-items: center;
  font-family: "Times New Roman", Times, serif;
`;

const FollowersFollowingDiv = styled.div`
  margin-left: 10px;
  margin-top: 3px;
`;

const DetailsDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const StyledImage = styled.img`
  margin-right: 10px;
  width: 16px;
  height: 16px;
`;

const UserDetail = () => {
  const searchedFor = useRecoilValue(localUser);
  const details = useRecoilValue(userDetails);

  if (details === "User  Not found") {
    return <h1>{searchedFor} not a valid github username</h1>;
  }

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
    <UserDetailContainer>
      <AvatarProfile src={`${avatar_url}`} alt={`profile_${name}`} />
      <StyledText>{name}</StyledText>
      <div>{login}</div>
      <LinkToBio>{bio}</LinkToBio>
      <FollowersFollowing>
        <img src={followersFollowingIcon} alt="followersFollowingIcon" />
        <FollowersFollowingDiv>
          <b>{followers}</b> followers · <b>{following}</b> following
        </FollowersFollowingDiv>
      </FollowersFollowing>
      {company && (
        <DetailsDiv>
          <StyledImage src={companyIcon} alt="companyIcon" />
          {company}
        </DetailsDiv>
      )}

      {location && (
        <DetailsDiv>
          <StyledImage src={locationIcon} alt="locationIcon" />
          {location}
        </DetailsDiv>
      )}

      {blog && (
        <DetailsDiv>
          <StyledImage src={blogIcon} alt="blogIcon" />
          {blog}
        </DetailsDiv>
      )}
      {twitter_username && (
        <DetailsDiv>
          <StyledImage src={twitterIcon} alt="twitterIcon" />
          {twitter_username}
        </DetailsDiv>
      )}
    </UserDetailContainer>
  );
};

export default UserDetail;
