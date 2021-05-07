import React from 'react';
import styled from 'styled-components'
import {selectMovies} from '../features/movie/movieSlice';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'


function Movies() {

   const movies = useSelector(selectMovies)

   // console.log('selected', movies);

   

   return (
      <Container>
         <h4>recomanded for you</h4>

         <Contant>
            {
               movies && 
               movies.map((movie)=>(
                  <Wrap key={movie.id}>
                    <Link to={`/detail/${movie.id}`}>
               <img src={movie.cardImg}  alt=""/>
                    </Link>
               
            </Wrap>
               ))

            }
            
            {/* <Wrap>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"  alt=""/>
               
            </Wrap>
            <Wrap>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"  alt=""/>
               
            </Wrap>
            <Wrap>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"  alt=""/>
               
            </Wrap>
            <Wrap>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"  alt=""/>
               
            </Wrap>
            <Wrap>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"  alt=""/>
               
            </Wrap>
            <Wrap>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"  alt=""/>
               
            </Wrap>
            <Wrap>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"  alt=""/>
               
            </Wrap>
            <Wrap>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"  alt=""/>
               
            </Wrap>
            <Wrap>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"  alt=""/>
               
            </Wrap>
            <Wrap>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"  alt=""/>
               
            </Wrap>
            <Wrap>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"  alt=""/>
               
            </Wrap> */}

         </Contant>
      </Container>
   )
}

export default Movies

const Container = styled.div``
const Contant = styled.div`
   display: grid;
   grid-template-columns: repeat(4, minmax(0, 1fr));
   grid-gap: 25px;
 

`
const Wrap = styled.div`
border-radius: 10px ;
cursor: pointer;
overflow: hidden;
border: 3px solid rgba(238, 238, 238, 0.103);
 box-shadow: rgb(0 0 0 / 69%) 0px 29px 36px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
transition: all 250ms cubic-bezier(0.25, 0.46,0.45, 0.94) 0s;
img{
      width: 100%;
      height: 100%;
      object-fit: cover;
   }      
      

&:hover{
   transform: scale(1.05);
   box-shadow: rgb(0 0 0 / 80%) 0px 29px 36px -10px, rgb(0 0 0 / 70%) 0px 16px 10px -10px ;
    border-color: rgba(238, 238, 238, 0.803);



         
      }

   

`

//  border: 4px solid rgba(238, 238, 238, 0.103);
//       border-radius: 10px;
//       box-shadow: rgb(0 0 0 / 80%) 0px 29px 36px -10px, rgb(0 0 0 / 70%) 0px 16px 10px -10px ;
//             transition-duration: 300ms;
//       cursor: pointer;

 