import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true

    };
   return (
      <ContainerCarosel {...settings}>
        
            <Wrap>
               <img src="images/slider-badging.jpg" alt=""/>
               {/* <img src="../../public/images/slider-badging.jpg" alt=""/> */}
            </Wrap>
             <Wrap>
               <img src="images/slider-badag.jpg" alt=""/>
               {/* <img src="../../public/images/slider-badag.jpg" alt=""/> */}
            </Wrap>

         
        
      </ContainerCarosel>
   )
}

export default ImageSlider

const ContainerCarosel = styled(Slider)`
    margin-top: 20px;

    ul li button{
       &:before{
          font-size: 10px;
          color: white;
       }
    }


    li.slick-active button::before{
       color:white;
    }

    .slick-list{
       overflow:visible
    }

    button{
       z-index: 1;
    }


`

const Wrap = styled.div`
   img{
      width: 100%;
      border-radius: 4px;
      border: 4px solid transparent;


      height: 100%;
      box-shadow: rgb(0 0 0 / 69%) 0px 29px 36px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
      transition-duration: 300ms;

      &:hover{
               border: 4px solid rgba(249, 249, 249, 0.8);

      }
   }

`





