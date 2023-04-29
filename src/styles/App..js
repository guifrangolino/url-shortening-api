import styled, { keyframes } from "styled-components";


const cor1 = 'hsl(180, 66%, 49%)'
const cor2 = 'hsl(257, 27%, 26%)'
const cor3 = 'hsl(0, 87%, 67%)'
const cor4 = 'hsl(0, 0%, 90%)'
const cor5 = 'hsl(257, 7%, 63%)'
const cor6 = 'hsl(255, 11%, 22%)'
const cor7 = 'hsl(260, 8%, 14%)'

const entranceAnim = keyframes`
  0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`;

export const Container = styled.div`
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 45px;
  max-width: 1440px;
  margin: auto;
  padding: 40px;

  .logo {

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    ul {
      display: flex;
      gap: 25px;
      list-style: none;

      li {
        a {
          text-decoration: none;
          color: ${cor5};
          font-weight: 700;
          transition: all .2s;

          &:hover {
            color: ${cor7};
          }
        }
      }

    }
  }

  .buttons {
    margin-left: auto;
  }

  .nav-toggle {
    display: none;
    width: 30px;
    height: 20px;
    background: none;
    border: none;
    background: none;
    cursor: pointer;
    position: relative;
    
    span {
      width: 30px;
      height: 4px;
      background: ${cor5};
      position: absolute;
      left: 0;
      top: 50%;
      transition: all .2s;
      transform: translateY(-50%);

      &:nth-child(1) {
        top: 0;
      }
      
      &:nth-child(3) {
        top: 100%;
      }
    }

  }

  .menu-open {
    span {
      &:nth-child(1) {
        top: 5px;
        transform: rotate(225deg);
      }
      
      &:nth-child(2) {
        transform: scaleX(0);
      }
      
      &:nth-child(3) {
        top: 5px;
        transform: rotate(-225deg);
      }
    }
  }

  @media (max-width: 890px) {
    justify-content: space-between;
    padding: 20px;
    position: relative;

    nav {
      display: none;
      justify-content: space-around;
      animation: ${entranceAnim} .3s ease 0s 1 normal forwards;

      ul {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 10px;
        width: 90%;
        border-bottom: 1px solid ${cor5};


        li {
          a {
            color: #fff;

            &:hover {
              color: #fff;
            }
          }
        }
      }

      &.menu-open {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${cor2};
        padding: 15px;
        position: absolute;
        top: 90px;
        z-index: 1;
        width: 90%;
        height: 290px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;

        .buttons {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 100%;
        }
      }
    }



    .nav-toggle {
      display: block;
    }
  }

`

export const Button = styled.button`
  background: lightblue;
  margin-left: 5px;
  border: none;
  padding: 10px 25px;
  border-radius: 30px;
  font-weight: 700;
  background: ${cor1};
  color: white;
  cursor: pointer;
  transition: all .2s;
  font-size: 14px;

  &:hover {
    opacity: .7;
  }

  &.login {
    background: none;
    color: ${cor5};
  }

  a {
    text-decoration: none;
    color: unset;
  }
`

export const Presentation = styled.section`
  width: 100%;
  overflow-x: hidden;

  .presentation-content {
    max-width: 1440px;
    margin: auto;
    padding: 0 40px 110px 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 450px) {
      padding: 0 20px 110px 20px;
    }

    .content {
    
      h1 {
        color: ${cor6};
        font-size: 74px;
        line-height: 90px;
      }

      p {
        font-size: 20px;
        color: ${cor5};
        margin-bottom: 25px;
        max-width: 525px;
        width: 100%;
      }

      Button {
        font-size: 20px;
      }

      @media (max-width: 1050px) {
        h1 {
          font-size: 54px;
          line-height: 64px;
        }

        p {
          font-size: 16px;
          max-width: 425px;
        }
      }
    }
    
    .img-container {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 125%;
      position: relative;
      right: -40px;
    }

    @media (max-width: 890px) {
      flex-direction: column-reverse;
      align-items: center;
      gap: 35px;

      .content {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;

        h1 {
          line-height: 60px;
        }

        p {
          font-size: 16px;
          max-width: 525px;
          width: 100%;
        }

        Button {
          font-size: 20px;
        }

        @media (max-width: 450px) {
          h1 {
            font-size: 34px;
            line-height: 40px;
          }

          p {
            margin-top: 15px;
          }
        }
      }

      .img-container {
        width: 100%;

        img {
          width: 100%;

          @media (max-width: 650px) {
            width: 400px;
            right: -50px;
          }
        }
      }
    }
    
  }
`

export const Statistics = styled.section`
  width: 100%;
  background: ${cor4};
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .statistics-container {
    max-width: 1440px;
    width: 100%;
    margin: auto;
    padding: 0 40px;

    @media (max-width: 890px) {
      padding: 0 20px;
    }

    .statistics-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 45px 0;
      text-align: center;

      h2 {
        font-size: 36px;
        color: ${cor6};

        @media (max-width: 530px) {
          font-size: 24px;
        }
      }

      p {
        max-width: 470px;
        width: 100%;
        color: ${cor5};

        @media (max-width: 530px) {
          font-size: 14px;
        }
      }
    }

  }

`

export const ShortenForm = styled.form`
  background-color: ${cor2};
  background-image: url('/images/bg-shorten-desktop.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 50px 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  gap: 10px;
  position: relative;
  top: -70px;

  @media (max-width: 1050px) {
    padding: 35px 20px;
  }

  div {
    max-width: 80%;
    width: 100%;
    border-radius: 7px;
    position: relative;

    &.error {
      border: 3px solid ${cor3};

      &:after {
        content: 'Please add a valid link';
        font-size: 14px;
        font-style: italic;
        font-weight: 500;
        color: ${cor3};
        position: absolute;
        left: 0;
        bottom: -25px;
      }
      
      &::placeholder {
        color: ${cor3};
      }
    }

  }

  input {
    border: none;
    outline: none;
    padding: 10px 20px;
    font-size: 16px;
    width: 100%;
    border-radius: 5px;
  }

  Button {
    border-radius: 5px;
    font-size: 16px;
  }

  @media (max-width: 890px) {
    flex-direction: column;
    gap: 20px;
    padding: 25px 20px;

    div {
      max-width: 100%;

      &.error {
        &:after {
          font-size: 12px;
          bottom: -22px;
        }
      }
    }

    Button {
      margin: 0;
    }
  }

`

export const ShortLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 15px 25px;
  border-radius: 5px;
  margin-bottom: 15px;
  position: relative;
  top: -40px;
  
  @media (max-width: 890px) {
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    
    &>span {
      border-bottom: 1px solid ${cor4};
      width: 100%;
      text-align: center;
      padding-bottom: 10px;
      overflow-wrap: break-word;
    }
  }

  @media (max-width: 650px) {
    font-size: 14px;
  }

  .short-link {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    @media (max-width: 890px) {
      flex-direction: column;
      width: 100%;
      align-items: normal;
      text-align: center;
    }

    span {
      color: ${cor1};
    }

    Button {
      border-radius: 5px;
      padding: 10px 25px;

      &.copied {
        background: ${cor2};
      }
    }
  }
`

export const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 100px;
  margin-top: 50px;

  @media (max-width: 1240px) {
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
  
`

export const Card = styled.div`
  background: #fff;
  max-width: 370px;
  width: 100%;
  height: 250px;
  padding: 15px 30px 25px 30px;
  border-radius: 5px;
  box-shadow: #00000020 0px 0px 5px 1px;

  &:nth-child(2) {
    margin-top: 45px;

    @media (max-width: 1240px) {
      margin: 0;
    }
  }

  &:nth-child(3) {
    margin-top: 90px;

    @media (max-width: 1240px) {
      margin: 0;
    }
  }

  .img-container {
    background: ${cor2};
    padding: 20px;
    width: fit-content;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -55px;
  }

  h3 {
    color: ${cor7};
    margin: 0;
    font-size: 24px;
    margin-top: -35px;
    margin-bottom: 15px;
  }

  p {
    color: ${cor5};
  }

  @media (max-width: 530px) {
    width: 100%;
    height: auto;
    
    .img-container {
      padding: 15px 10px;
      top: -45px;
      
      img {
        width: 80%;
      }
    }
    
    h3 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
      text-align: center;
    }
  }
`

export const BoostLink = styled.section`
  background-color: ${cor2};
  background-image: url('/images/bg-boost-desktop.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 44px;

  h2 {
    color: #FFF;
    font-size: 36px;
  }

  Button {
    font-size: 18px;
  }

  @media (max-width: 530px) {
    h2 {
      font-size: 20px;
    }

    Button {
      font-size: 16px;
    }
  }
`

export const Footer = styled.footer`
  background: ${cor7};

  .footer-container {
    max-width: 1440px;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 50px 0;

    @media (max-width: 530px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 40px;
    }

    &>img {
      align-self: flex-start;
      filter: brightness(0) invert(1);

      @media (max-width: 530px) {
        align-self: center;
        padding: 25px 0;
      }
    }

    .features, .resources, .company {
      font-size: 14px;

      span {
        color: #fff;
        display: block;
        margin-bottom: 10px;
      }

      ul {
        list-style: none;

        li {
          margin-bottom: 5px;

          @media (max-width: 530px) {
            margin-bottom: 10px;
          }

          a {
            color: ${cor5};
            text-decoration: none;
            transition: all .3s;

            &:hover {
              color: ${cor1};
            }
          }
        }
      }
    }

    .social-medias {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;

      @media (max-width: 530px) {
        gap: 25px;
      }
      
      a img:hover {
        transition: all .3s;
        filter: invert(0%) sepia(59%) saturate(6585%) hue-rotate(125deg) brightness(86%) contrast(85%);
      }
    }

  }
`