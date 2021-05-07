import React, {useEffect} from 'react';
import styled from 'styled-components'
import {selectPhoto, selectUser, setUserLogin, setSignOut} from '../features/user/userSlice'
import {useSelector, useDispatch} from 'react-redux';
import {auth, provider} from '../firebase'
import {useHistory} from "react-router-dom"

function Header() {
   const dispatch = useDispatch()
   const history = useHistory()

   const userName = useSelector(selectUser)
   const userphoto = useSelector(selectPhoto)

   useEffect(() => {
      auth.onAuthStateChanged(async (user)=>{
         if(user){
             dispatch(setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL

         }))
         history.push('/')

         }
      })
      
   }, [])

   const signin =()=>{

      auth.signInWithPopup(provider).then((result)=>{
         console.log(result);
         let user = result.user
         // console.log(result.user.displayName);
         dispatch(setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL

         }))
          history.push('/')
          
      })

   }
   const signOut =(state)=>{
      auth.signOut().then(()=>{
         dispatch(setSignOut())
         history.push('/login')
      })



   }





   return (
      <Nav>
         <Logo src="images/logo.svg"  />
         {
            !userName ?
            <LoginContainer>

            <Login onClick={signin}>
               login
            </Login>
            </LoginContainer>
            :
            <>
         <NavMenue>
            <a href="/">
               <img src="./images/home-icon.svg" alt="icon"/>
               <span>HOME</span>
            </a>
            <a  href="/" >
               <img src="./images/Search-icon.svg" alt="icon"/>
               <span>Search</span>
            </a>
            <a  href="/" >
               <img src="./images/watchlist-icon.svg" alt="icon"/>
               <span>watchlist</span>
            </a>
            <a  href="/" >
               <img src="./images/original-icon.svg" alt="icon"/>
               <span>original</span>
            </a>
            <a  href="/" >
               <img src="./images/movie-icon.svg" alt="icon"/>
               <span>movie</span>
            </a>
            <a  href="/" >
               <img src="./images/series-icon.svg" alt="icon"/>
               <span>series</span>
            </a>

         </NavMenue>
         
         
         <UserImage onClick={signOut} src={userphoto} />
         </>
        }


         
           
         
         
      </Nav>
   )
}

export default Header

const Nav =  styled.nav`
   height:  72px;
   background:#090b13 ;
   display:  flex;
   align-items: center;
   padding: 0 36px;
   overflow-x: hidden;


`
const Logo = styled.img`
   width: 80px;



`

const NavMenue = styled.div`
   display:  flex;
   flex: 1;
   margin-left: 25px;

   a{
      display:  flex;      
      align-items: center;
      padding: 0 16px;
      cursor: pointer;
      text-decoration: none;
      color: #fff;


      img{
         height:  28px;
   }
   span {
      font-size: 13px;
      letter-spacing: 1.45px;
      text-transform: uppercase;
      position: relative;   


      &::after{
         content: '';
         height: 2px;
         background: #fff;
         position: absolute;
         
         left:0;
         right: 0;
         bottom: -6px;
         opacity: 0;
         transform: scaleX(0); 
         transform-origin: left center; 
         
         transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94 ) 0s;


         
      }
   }
   &:hover{
      span::after{
         opacity: 1;
         transform: scaleX(1);
      }
   }
   
   }

`
const UserImage = styled.img`
width: 40px;
   height: 40px;
   border-radius: 50%;
`
const Login = styled.div`
   border:  1px solid #f9f9f9;
   padding: 8px 16px;
   border-radius: 4px;
   letter-spacing: 1.5;
   text-transform: uppercase;
   background-color: transparent;
   color: #f9f9f9;
   cursor: pointer;
   font-weight: 600;

   &:hover{
   background-color: #f9f9f9;
   color: #242424;
   border-color:transparent;


   }
`
const LoginContainer = styled.div`
   display:flex;
   flex:1;
   justify-content: flex-end;


`

