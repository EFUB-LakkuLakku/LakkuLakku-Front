import React, { useState, useEffect } from "react";
import DefaultImg from "../../assets/DefaultImg.png";
//import { ReactComponent as DefaultImg } from '../assets/default_img.svg'
import ProfileEditModal from './ProfileEditModal';
import styled from "styled-components";
import theme from "../../styles/theme";
import API from '../../utils/api';

const Profile = () => {
  const [info, setInfo] = useState( { user: { profileImageUrl: null, bio: "" } } ); //초기값!!
  const [showModal, setShowModal] = useState(false);

  const nickname = localStorage.getItem("nickname");


  const editedInfo = () => {
    API.get(`/api/v1/home/`, { params: { nickname: nickname } })
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    editedInfo();

    //console.log(info.user.id);
    //console.log(info.user.bio);
    //console.log(info.user.profileImageUrl);


    localStorage.setItem("id", info.user.id)
    localStorage.setItem("profileImage", info.user.profileImageUrl);
  }, [info]);  

  /*
  const editedInfo = async () => {
      const response = await axios.get(`(url)`)
      .then(res => setInfo(res.data))
      .catch(e => console.log(response))
    }; 
  
    useEffect(() => {
      editedInfo();
    }, [info]);  
  */
  //nickname 백엔드에서 get해오기


  return (
    <ProfileBox>
      
        <ProfileImg src={info.user.profileImageUrl===null  ? DefaultImg : info.user.profileImageUrl} />
        
        <Nickname> <span style={{color: '#8b681a'}}>{nickname}</span>의 먼슬리 다이어리</Nickname>

        <BioBox>
            <BioHeader>자기소개</BioHeader>
            <Bio> {info.user.bio} </Bio>
        </BioBox>

        <BtnBox onClick={e => e.stopPropagation()}>
            <ProfileEditBtn onClick={() => setShowModal(true)}>
            프로필 수정
            </ProfileEditBtn>
        </BtnBox>
        {showModal && <ProfileEditModal imageInfo={info.user.profileImageUrl} bioInfo={info.user.bio} nicknameInfo={info.user.nickname} isOpenModal={showModal} setIsOpenModal={setShowModal}/>} 

    </ProfileBox>
  );
};

const ProfileBox = styled.div`
  flex: 0.635;
  background-color: ${theme.background};
  border-top-left-radius: 30rem;
  border-bottom: none;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 62rem;
`;

const ProfileImg = styled.img`
  width: 280rem;
  height: 283rem;
  border-radius: 30rem;

  margin-bottom: 36rem;
`;

const Nickname = styled.div`
  font-size: 16rem;
  font-family: "NotoSansKR-Bold";

  margin-bottom: 27rem;
`;

const BioBox = styled.div`
  width: 270rem;

  margin-bottom: 14rem;
`;

const BioHeader = styled.div`
  font-size: 14rem;
  font-family: "NotoSansKR-Bold";

  display: flex;
  justify-content: flex-start;

  margin-bottom: 4rem;
`;

const Bio = styled.div`
  font-size: 14rem;
  font-family: "NotoSansKR-Regular";
  color: #625d52;

  width: 270rem;
  height: 39rem;
  background-color: #f6f5ec;
  border-radius: 10rem;

  line-height: 39rem;
  display: flex;
  justify-content: flex-start;

  padding-left: 12rem;
`;

const BtnBox = styled.div`
  width: 270rem; //*box 크기 넓혀주고! 안의 요소들 움직여야됨

  display: flex;
  justify-content: flex-end;
`;

const ProfileEditBtn = styled.button`
  width: 84rem;
  height: 24rem;

  background-color: ${theme.main};
  border-radius: 17rem;
  border: none;

  font-size: 12rem;
  font-family: "NotoSansKR-Bold";
`;

export default Profile;
