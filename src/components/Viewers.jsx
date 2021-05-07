import React from 'react';
import styled from 'styled-components'


function Viewers() {
   return (
      <Container>
         <Wrap>
               <img src="images/viewers-disney.png" alt=""/>
               {/* <img src="../../public/images/viewers-disney.png" alt=""/> */}
            </Wrap>
            <Wrap>
               <img src="images/viewers-pixar.png" alt=""/>
               {/* <img src="../../public/images/viewers-disney.png" alt=""/> */}
            </Wrap>
            <Wrap>
               <img src="images/viewers-marvel.png" alt=""/>
               {/* <img src="../../public/images/viewers-disney.png" alt=""/> */}
            </Wrap>
            <Wrap>
               <img src="images/viewers-starwars.png" alt=""/>
               {/* <img src="../../public/images/viewers-disney.png" alt=""/> */}
            </Wrap>
            <Wrap>
               <img src="images/viewers-national.png" alt=""/>
               {/* <img src="../../public/images/viewers-national.png" alt=""/> */}
            </Wrap>
         
      </Container>
   )
}

export default Viewers

const Container = styled.div`
   padding: 30px 0 26px;
   display: grid;
   grid-template-columns: repeat(5, minmax(0, 1fr)) ;
   grid-gap: 28px;




`
const   Wrap = styled.div`
    border: 4px solid rgba(238, 238, 238, 0.103);
      border-radius: 10px;
      box-shadow: rgb(0 0 0 / 80%) 0px 29px 36px -10px, rgb(0 0 0 / 70%) 0px 16px 10px -10px ;
            transition-duration: 300ms;
      cursor: pointer;
         
      &:hover{
         transform: scale(1.05);
          box-shadow: rgb(0 0 0 / 69%) 0px 29px 36px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
    border: 4px solid rgba(238, 238, 238, 0.803);


         
      }

   img{
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
   


`