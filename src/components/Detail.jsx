import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import db from '../firebase';



function Detail() {
   const {id} = useParams()
   console.log(id);

   const [movie, setMovie] = useState()


   useEffect(() => {
      db.collection('movies')
      .doc(id)
      .get()
      .then((doc=>{
         if(doc.exists){
            //save the movie data
            setMovie(doc.data())

         }
         else{
            //re direct to homepage
         }
      }))
      
   }, [id])

   console.log('movie is ' ,  movie);








   return (
      <Container>
         { movie && 
         <>
         <Background>
            <img src={movie.backgroundImg} alt=""/>

         </Background>
         <ImageTitle>
            <img src={movie.titleImg} alt="" />
         </ImageTitle>

         <ControlContainer>
            <PlayButton>
               <img src="/images/play-icon-black.png" alt=""/> <span>Play</span>
            </PlayButton>
            <TrailarButton>
              <img src="/images/play-icon-white.png" alt=""/> <span>Trailer</span>
            </TrailarButton>
            <AddButton>
               <span>+</span>
            </AddButton>

            <GroupWatchButton>
                    <img src="/images/group-icon.png"  alt=""/>


            </GroupWatchButton>
         </ControlContainer>
         <SubTitle>
               {movie.subTitle}
            </SubTitle>
            <Description>
                               {movie.description}

            </Description>
            </>
         
}

      </Container>
   )
}

export default Detail;


const Container =styled.div`
   min-height: calc(100vh - 78px);
   padding: 0 calc(3.5vw + 5px);
   position: relative;
`
const Background = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   bottom: 0;
   right: 0;
   z-index:-1;
   opacity: 0.8;

   img{
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

`
const ImageTitle = styled.div`
   width: 35vw;
   height: 30vh;
   min-width: 200px;
   min-height: 170px;
   margin-top: 50px;


   img{
      width: 100%;
      height: 100%;
      object-fit: contain;
   }

   

`
const ControlContainer = styled.div`
      display: flex;
      align-items: center;

`

const PlayButton = styled.button`
      border-radius: 4px;
      font-size: 15px;
      display: flex;
      align-items: center;
      height: 56px;
      background-color: rgb(248, 248, 248);
      margin-right: 22px;
      letter-spacing: 1.8px;
      cursor: pointer;
      border: none;
      text-transform: uppercase;
      padding: 0 24px;
      
      &:hover{
         background-color: rgb(180, 180, 180);
      }

`

const TrailarButton = styled(PlayButton)`
      background-color: rgb(0, 0, 0, .5);
      color: #eee;
      border: #ddd solid 1px;


`

const AddButton = styled.button`
      height: 44px;
      width: 44px;
      display: flex;
       margin-right: 16px;
      cursor: pointer;
      
      align-items: center;
      justify-content: center;
      border: #ddd solid 1px;
      background-color: rgb(0, 0, 0, .8);
      border-radius: 50%;
      span {
         font-size: 36px;
         color: #ddd

      }
`

const GroupWatchButton = styled(AddButton)`
      // background-color: rgb(0, 0, 0, .8);

`

const SubTitle = styled.div`
      color: rgb(240, 240, 240);
      margin-top: 24px;
      font-size: 15px;
      min-height: 20px;
      
`
const Description = styled.div`
      line-height: 1.4;
      font-size: 20px;
      margin-top: 20px;
      color: rgb(240, 240, 240);
      max-width: 750px

`






