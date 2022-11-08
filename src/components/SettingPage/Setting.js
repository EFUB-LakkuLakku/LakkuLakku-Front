import React, {useState} from 'react';
import styled from 'styled-components';
import theme from "../../styles/theme";
import API from '../../utils/api';


const Setting = () => {
    const [currentPassword, setCurrentPassword] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //const [currentPasswordError, setCurrentPasswordError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);



    const onChangeCurrentPassword = (e) => {
        //if ( !e.target.value || 'tlsdbwls17' === e.target.value) setCurrentPasswordError(false); 
        //else setCurrentPasswordError(true);
        setCurrentPassword(e.target.value);
    };

    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
        else setPasswordError(true);

        if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setPassword(e.target.value);
    };

    const onChangeConfirmPassword = (e) => {
        if (password === e.target.value) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setConfirmPassword(e.target.value);
    };


    /*
    const passwordValidation = () => {
        if(!currentPassword) setCurrentPasswordError(true);
        if(!password) setPasswordError(true);
        if(!confirmPassword) setConfirmPasswordError(true);

        if(password && currentPassword && confirmPassword && !currentPasswordError && !passwordError && !confirmPasswordError) return true;
        else return false;
    }
    */


    //const submitPassword = (e) => {
    //    if(passwordValidation()) return; //새 비밀번호를 백엔드에 submit하는 코드 넣기
    //}

    const submitPassword = async () => {         

        await API.put(`/api/v1/settings`, {
          "beforePassword" : currentPassword, 
          "afterPassword" : password,
          "checkAfterPassword" : confirmPassword
         } )
        .then(res => console.log((res.data)))
        .catch(err=> console.error(err));

        alert("수정되었습니다.")

        setCurrentPassword("");
        setPassword("");
        setConfirmPassword("");
      }
  


    const id = sessionStorage.getItem('id');  //session strorage로 수정!!

    const copyUid = () => {
        window.navigator.clipboard.writeText(id).then(() => {
            alert("복사되었습니다.");
          });
          
         } 


    

    return (
        <SettingBox>
            <Header>설정</Header>
            
            <PwBox>
                <PwHeader>비밀번호 수정</PwHeader>

                <PwSection>
                    <Input onChange={(e) => setCurrentPassword(e.target.value)} 
                        value={currentPassword} 
                        placeholder="현재 비밀번호를 입력해 주세요"
                        type="password"
                        onChange={onChangeCurrentPassword}
                        required
                    />
                    {/* {currentPasswordError && <Error>비밀번호를 정확하게 입력해주세요.</Error>} */}
                </PwSection>

                <PwSection>
                    <Input onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                        placeholder="새 비밀번호를 입력해 주세요"
                        type="password"
                        onChange={onChangePassword}
                        minLength={8}
                        maxLength={16}
                        required
                    />
                    {passwordError && <Error>8자 이상, 16자 이내의 영문자 및 숫자와 특수문자(!@#$%^*+=-)로 입력해주세요.</Error>}
                </PwSection>

                <PwSection>
                    <div className='inputandbutton'>
                        <Input onChange={(e) => setConfirmPassword(e.target.value)} 
                        value={confirmPassword} 
                        placeholder="새 비밀번호를 입력해 주세요"
                        type="password"
                        className='inputandbutton__input'
                        onChange={onChangeConfirmPassword}
                        minLength={8}
                        maxLength={16}
                        required
                        />
                    </div>
                    {confirmPasswordError && <Error>비밀번호가 일치하지 않습니다.</Error>}
                </PwSection>

                <SubmitBtnBox>
                    <SubmitBtn type="submit" onClick={submitPassword}>확인</SubmitBtn>
                </SubmitBtnBox>
            </PwBox>
            

            <UidBox>
                <UidHeader>UID</UidHeader> 
                <UidText>{id}</UidText> {/* {uid}로 바꾸기, 백엔드에 있는 uid props로? 가져오기 */}
                <CopyBtn onClick={copyUid} >복사</CopyBtn> 
            </UidBox>
        </SettingBox>
    );
};

const SettingBox = styled.div`
    background-color: #FAF9F7;

    width: 1050rem;
    height: 905rem;

    display: flex;
    flex-direction: column;

    padding-top: 65rem;
    padding-left: 137rem;

    border-top-right-radius: 30rem;
    border-bottom-right-radius: 30rem;
    border: 1rem solid ${theme.border};
`;

const Header = styled.div`
    font-size: 24rem;
    font-family: "NotoSansKR";
    font-weight: 800;

    margin-bottom: 55rem;
`;

const PwBox = styled.div`
    display: flex;
    flex-direction: column;

    width: 563rem; //*box 크기 고정해주고! 안의 요소들 움직이기

    margin-bottom: 64rem; //보류
`;

const PwHeader = styled.div`
    font-size: 18rem;
    font-family: "NotoSansKR-Bold";
    color: #625D52;

    margin-bottom: 10rem;
`;

const PwSection = styled.div`
    height: 78rem;

    margin-bottom: 19rem;
`

const Input = styled.input`
    width: 563rem;
    height: 48rem;
    border: 1rem solid #667080;
    border-radius: 6rem;

    margin-bottom: 8rem;
    padding: 0 20rem;

    ::placeholder {
        color: #a39e93;
        font-size: 14rem;
        font-family: "NotoSansKR-Medium";
    } //placeholder 스타일링하기!
`;

const Error = styled.div`
    font-size: 12rem;
    font-family: "NotoSansKR-Regular";
    color: #8b681a;
`;

const SubmitBtnBox = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const SubmitBtn = styled.button` //확인 버튼 위치 보류
    width: 97rem;
    height: 48rem;
    background-color: #A39E93;
    border-radius: 6rem;
    border: none;

    color: #FFFFFF;
    font-size: 18rem;
    font-family: "NotoSansKR-Bold";
`;

const UidBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 450rem;
`;

const UidHeader = styled.div`
    font-size: 18rem;
    font-family: "NotoSans-Bold";
    color: #625D52;
`;

const UidText = styled.div`
    font-size: 16rem;
    font-family: "NotoSans-Regular";
`;

const CopyBtn = styled.button`
width: 58rem;
height: 26rem;
border: none;
border-radius: 17rem;
background-color: #A39E93;

font-size: 12px;
font-family: "NotoSansKR-Bold";
color: #FFFFFF;
`

export default Setting;