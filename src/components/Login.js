import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const LoginPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: #F9F1F6// #FDE2F3;
`

const LoginContainer = styled.div`
    display: flex;
    background-color: #E5BEEC;
    border: 3px solid #917FB3;
    border-radius: 15px;
    height: 60vh;
    width: 70vw;


    @media screen and (max-width: 600px) {
        height: 75vh;
        width: 80vw;
        flex-direction: column-reverse;
    }
`

const LoginByEmail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 45vw;
    border-radius: 15px 0 0 15px;

    @media screen and (max-width: 600px){
        width: 100%;
        height: 50vh;
    }

`
const LoginPicture = styled.div`
    display: flex; 
    flex-direction: column;
    background-image: url('https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?w=740&t=st=1698583172~exp=1698583772~hmac=bf3b6016862f6662b563f4393a0bf1c93671743a03489485af4f2a9b6cc65b7f'); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    height: 100%;
    width: 25vw;
    border-radius: 0 15px 15px 0;

    @media screen and (max-width: 600px){
        width: 100%;
        height: 25vh;
        border-radius: 15px 15px 0 0;
    }
`
const StyledInput = styled.input`
    width: 80%;
    height: 5vh;
    border-radius: 10px;
    margin: 10px 0;
    border: none;
    background-color: ##F9F1F6//#fde7f5;
    font-family: 'Indie Flower', cursive;
    font-size: large;
    color: grey;
    padding: 5px 10px;

    &:focus {
        outline: 2px solid #917FB3; 
      }

`
const H1 = styled.h1`
    color: #2A2F4F;
    font-family: 'Comfortaa', sans-serif;
    font-size: x-large;
    font-weight: 700;
`

const Label = styled.label`
    color: #917FB3;
    font-family: 'Comfortaa', sans-serif;
    font-size: medium;
    font-weight: bold;

    @media screen and (max-width: 600px){
        font-size: small;
    }
`
const CheckBox = styled.input`
    transform: scale(1.5);

    @media screen and (max-width: 600px){
       transform: scale(0.75);
    }
`

const Group = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;

    @media screen and (max-width: 600px){
        justify-content: space-around;
        align-items: center;
    }
`
const A= styled.a`
      text-decoration: none;
      color: #917FB3;
    font-family: 'Comfortaa', sans-serif;
    font-size: medium;
    font-weight: bold;

    @media screen and (max-width: 600px){
        font-size: small;
    }
`
const Button = styled.button`
    width: 130px;    
    height: 5.5vh;
    margin: 10px 0 20px;
    border-radius: 20px;
    border: 2.5px solid  #917FB3;
    color: #917FB3;
    font-family: 'Comfortaa', sans-serif;
    font-size: large;
    font-weight: bold;

    &:hover{
        background-color: #917FB3;
        color: white;
        cursor: pointer;
    }


`
const Hoverable = styled.div`
    &:hover{
        cursor: pointer;
    }
`
const RememberMe = styled.div`
    
@media screen and (max-width: 600px){
    display: none}
`

const Login = () => {
  return (
    <LoginPage>
        <LoginContainer>
            <LoginByEmail>
                <H1>Login Using Email</H1>
                <StyledInput type="email" placeholder='Email'/>
                <StyledInput type="password" placeholder='Password'/>
                <Button type="submit">Login</Button>
                <Group>
                    <RememberMe><Label> Remember Me? </Label>
                    <CheckBox type="checkbox"/></RememberMe>
                    <div> <A href="#">Forgot Password?</A> </div>
                </Group>
                <H1> Or Login Using </H1>
                <Group>
                <Hoverable>
                <GoogleIcon sx={{ fontSize: 50 , color: "#B2533E" }}/>
                </Hoverable>
                <Hoverable>
                <GitHubIcon sx={{ fontSize: 50 , color: "#454545"}}/>
                </Hoverable>
                <Hoverable>
                <TwitterIcon sx={{ fontSize: 50 , color: "#6499E9"}}/>
                </Hoverable>
                </Group>
            </LoginByEmail>
            <LoginPicture>
            </LoginPicture>
        </LoginContainer>
    </LoginPage>

  )
}

export default Login


