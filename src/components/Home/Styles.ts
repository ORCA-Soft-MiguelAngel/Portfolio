import styled from 'styled-components'

export const ModalPopupStyles = {
  Background: styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1024;
  `,

  ModalWrapper: styled.div`
    width: 700px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    padding: 15px;
    font-family: 'Poppins';
    @media (max-width: 767px) {
      width: 95%;
      margin: 0 auto;
    }
  `,

  ModalImg: styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000;
  `,

  ModalContent: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    p {
      margin-bottom: 1rem;
    }
    button {
      padding: 10px 24px;
      background: #141414;
      color: #fff;
      border: none;
    }
  `,
  Button: styled.button`
    display: inline-block;
    background: ${({ color }) => (color ? color : 'crimson')};
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 25px;
    cursor: pointer;
    border-radius: 6px;
    border: 2px solid ${({ color }) => (color ? color : 'crimson')};
    transition: all 0.3s ease;

    &:hover {
      color: ${({ color }) => (color ? color : 'crimson')};
      background: none;
    }

    svg {
      display: none;
    }

    @media (max-width: 767px) {
      display: flex;
      margin: 0 auto;
      svg {
        display: block;
        margin-right: 10px;
      }
    }
  `,
  Divider: styled.div`
    margin: 10px 0;
    padding: 0 15px;
    width: 100%;
    height: 1px;
    background: gray;
    border-radius: 20px;
  `,
  CloseButton: styled.div`
    position: absolute;
    right: 15px;
    top: 5px;
    color: crimson;
    cursor: pointer;
    transition: all 0.1s;
    &:hover {
      color: darkgrey;
    }
  `,
  ModalContainer: styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  `,
  Disclaimer: styled.div`
    text-align: center;
    margin: 8px 10px 0 10px;
    font-size: 12px;
    @media (max-width: 767px) {
      display: none;
    }
  `,
  SocialDiv: styled.div`
    padding: 10px;
    text-align: center;
    @media (max-width: 767px) {
      div {
        img {
          display: none;
        }
        p {
          display: none;
        }
      }
    }
  `,
  Header: styled.div`
    text-align: center;
    h1 {
      color: crimson;
    }

    @media (max-width: 767px) {
      h1 {
        font-size: 18px;
      }
      p {
        font-size: 12px;
      }
    }
  `,
  Footer: styled.div`
    text-align: center;
    h4 {
      color: crimson;
    }
    h5 {
      display: none;
      color: crimson;
    }
    @media (max-width: 767px) {
      h4 {
        display: none;
      }
      h5 {
        display: block;
        font-size:16px;
      }
      div{
        p{
          font-size:14px;
        }
      }
    }
  `,
}
