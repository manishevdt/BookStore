import React, { useState ,useEffect} from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { api } from "../api/axious";

import Cards from './Cards';

const Freebook = () => {
  const [book,setBook] = useState([])
  
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await api.get("/book");  
        setBook(res.data.filter((data) => data.category === "free"));
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBook();   // <-- important
  }, []); ;
//  free data ko filter kr rha hai 

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

 


  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
        <h1 className='font-semibold text-xl pd-2'>Free Book Offered</h1>
        <p>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aspernatur in ducimus explicabo eum natus, fugit culpa voluptate ipsum voluptates? Fugit autem laborum dolores placeat cupiditate itaque nobis, molestias sed.
        </p>
        </div>

      <div>
      <Slider {...settings}>
       {
        book.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))
       }
       
      </Slider>
      </div>
      </div>
    </>
    
  )
}

export default Freebook
