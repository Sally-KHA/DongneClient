import React from 'react';
import BackgroundTemplate from '../../template/BackgroundTemplate';
import styled from 'styled-components';
import palette from '../../styles/pallete';
import UserRegister2 from '../../components/UserRegister2';
import ArrowBackIcon from '../../styles/imgs/icon/Arrow_back.png';
import register3 from '../../styles/imgs/icon/3.png';
import { Link } from 'react-router-dom';

const WhiteBox = styled.div`
  position: relative;
  font-family: 'Pretendard Regular';
  font-size: 1rem;
  color: ${palette[3]};

  .arrowIcon {
    position: absolute;
    left: 0.625rem;
    top: 0.5rem;
    width:2.5rem;
    height:2.5rem;
  } 

  .pagenumber {
    position: absolute;
    left: 36rem;
    top: 0.6rem;
    width: 2.3rem;
    height:1.5rem;
  } 

  .Logo {
    font-family: 'Pretendard Medium';
    color: #3333;
    margin-bottom: 2rem;
  }

  .ExtraBold {
    font-family: 'Pretendard ExtraBold';
    font-size: 2rem;
    text-align: center;
    padding-bottom: 1rem;
  }

`;

const UserRegisterCheck3 = () => {
  return (
    <BackgroundTemplate style={{ zIndex: 0 }}>
        <WhiteBox style={{ zIndex: 1 }}>
        <Link to="/user/register/check2"><img src={ArrowBackIcon} alt='' className='arrowIcon' /></Link>
        <img src={register3} alt='' className='pagenumber' />
        <div className="ExtraBold" style={{ marginBottom: '0.5rem' }}>
         일반 회원 가입
        </div>
        <UserRegister2
          presentpage="/user/register/check3"
          nextpage="/user/register/check3"
        />
        </WhiteBox>
    </BackgroundTemplate>
  );
};

export default UserRegisterCheck3;