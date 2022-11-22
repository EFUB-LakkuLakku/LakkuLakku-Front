import React, {useState, useEffect, useRef} from 'react';
import DefaultImg from "../../assets/DefaultImg.png";
import { ReactComponent as DeleteIcon } from '../../assets/delete_icon.svg'
//import DefaultImg from '../../assets/default_img.svg'
import styled from 'styled-components';
import theme from '../../styles/theme';
import API from '../../utils/api';

const ProfileEditModal = ({imageInfo, bioInfo, nicknameInfo, isOpenModal, setIsOpenModal}) => {
    const [image, setImage] = useState(imageInfo); 
    const [bio, setBio] = useState(bioInfo);   
    
    //초깃값에 props 넣으면 useEffect 해줘야 되는 것 같았음~~
    


    const wrapperRef = useRef();

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);

      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })                        

    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        setIsOpenModal(false);
      }
      else {
        setIsOpenModal(true);
      }
    }



    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const uploadImage = e => {  //이미지를 업로드
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);

            setImage(file);

            console.log(image);
        }
    };



    const sendToServer = async () => {         
        
        const formData = new FormData()
        formData.append("nickname", nicknameInfo);
        formData.append("image", image);
        formData.append("bio", bio);
        formData.append("url", "");

        console.log(nicknameInfo);
        console.log(image); 
        console.log(bio);
        console.log(formData); 

        await API.put(`/api/v1/profile`, formData )
        .then(res => console.log((res.data)))
        .catch(err=> console.log(err))
        
        alert("저장되었습니다!");
        
        setIsOpenModal(false);
    } //api 연결  //다시 수정해보기!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    

    /*

    const editInfo = async () => {

        const response = await axios.put(`${PROXY}/users/1`,
        {
            "nickname" : nameInputs,
            "identifier" : "testIdentifier",
            "bio": bioInputs	
        }) // submit→'db'에 있는 걸 수정
        .catch(e => console.log(response))
        
        setNameInputs('');
        setBioInputs('');
        setIsOpenModal(false);
    }

    */


    return (
        <Background>
            <ProfileEditBox ref={wrapperRef} value={isOpenModal}>
                <Header>
                    <Title>프로필 수정</Title>
                    <CancelBtn onClick={ () => setIsOpenModal(false) }> <DeleteIcon /> </CancelBtn>
                </Header>

                <ImgBox>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={uploadImage}
                        ref={imageUploader}
                        style={{display: "none"}}
                    />
                    <UploadedImgBox>
                        <UploadedImg src={(image==null) ? DefaultImg : image} ref={uploadedImage} />
                    </UploadedImgBox>
                    
                    <BtnBox>
                        <ChangeBtn onClick={() => imageUploader.current.click()}>이미지 변경</ChangeBtn> {/*누르면 이미지 업로드하는 버튼*/}
                        <ChangeBtn onClick={() => setImage(null)}>기본 이미지로 변경</ChangeBtn>
                    </BtnBox>
                </ImgBox>

                <BioHeader>자기소개</BioHeader>

                <Footer>
                    <BioInput 
                    onChange={(e) => {setBio(e.target.value); console.log(bio);}}
                    value={bio}
                    type="text" />

                    <SaveBtn type="submit" onClick={sendToServer}>저장</SaveBtn> {/* 누르면 수정된 이미지와 자기소개를 서버에 저장하는 버튼*/}
                </Footer>
            </ProfileEditBox>
        </Background>

    );
};


const Background = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.6);

    z-index: 100; //수정
`;

const ProfileEditBox = styled.div`
    width: 608rem;
    height: 499rem;
    background-color: ${theme.background};
    border-radius: 30rem;

    padding: 30rem;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  //모달을 뷰포트 중앙에 배치
`;

const Header = styled.div`
    margin-bottom: 29rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.div`
    font-size: 20rem;
    font-family: "NotoSansKR-Bold";
    color: ${theme.font};
`;

const CancelBtn = styled.button`
    border: none;
    background-color: transparent;
`;

const ImgBox = styled.div`
    display: flex;

    margin-bottom: 29rem;
`;

const UploadedImgBox = styled.div`
    height: 283rem;
    width: 280rem;
    border: 7rem solid #B8B2A7;
    border-radius: 33rem;  //수정

    margin-right: 56rem;
`;

const UploadedImg = styled.img`
    width: 100%;
    height: 100%;

    border-radius: 25rem;  //수정
`;

const BtnBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const ChangeBtn = styled.button`
    color: #625D52;
    font-size: 18rem;
    font-family: "NotoSansKR-Bold";

    padding: 0;
    display: flex;
    margin-bottom: 16rem;
    
    border: none;
    background-color: transparent;
`;

const BioHeader = styled.div`
    margin-bottom: 4rem;

    font-size: 14rem;
    font-family: "NotoSansKR-Bold";

`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const BioInput = styled.input`
    width: 280rem;
    height: 39rem;

    background-color: #F7F5EC;
    border-radius: 10rem;
    border: none;

    padding: 0 10rem;

    font-size: 14rem;
    font-family: "NotoSansKR-Bold";
    color: #625D52;

`;

const SaveBtn = styled.button`
    width: 78rem;
    height: 31rem;

    background-color: #A39E93;
    border-radius: 24rem;
    border: none;

    color: #FFFFFF;
    font-size: 14rem;
    font-family: "NotoSansKR-Bold";

    display: flex;
    justify-content: center;
    align-items: center;

`;


export default ProfileEditModal;