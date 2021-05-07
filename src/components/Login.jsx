import React from 'react';
import styled from 'styled-components'
import {auth, provider} from '../firebase'


function Login() {



   const signin =()=>{

      auth.signInWithPopup(provider)}

   


   return (
      <Container>
         <Contant>
            <LogosTop src="/images/cta-logo-one.svg" />
            <SignUpBtn onClick={signin}>
               GET ALL THERE
            </SignUpBtn>
            <DiscriptionComponent>
               Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
            </DiscriptionComponent>
            <LogosBottom  src="/images/cta-logo-two.png"/>

           

         </Contant>
         
      </Container>
   )
}

export default Login

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: calc(100vh - 70px);
position: relative;

   &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("/images/login-background.jpg");
      z-index: -1;
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
   }



`
const Contant = styled.div`
      max-width: 650px;
      padding: 80px 40px;
      width: 70%;
`
const LogosTop = styled.img`
      width:100%;

`
const SignUpBtn = styled.a`
      background-color: rgb(29, 86, 255);
      width: 100%;
      display: block;
      text-align: center;
      font-weight: bold;
      padding:  10px 17px;
      color: #f9f9f9;
      cursor: pointer;
      font-size: 18px;
      border-radius: 4px;
      transition:  all 250ms;

      &:hover{
         background-color: rgba(29, 86, 255, .8);

      }

`
const DiscriptionComponent = styled.p`
      font-size: 12px;
      text-align: center;
      line-height: 1.5;
      letter-spacing: 1.5px;



`

const LogosBottom = styled.img`
      width:100%;

`



