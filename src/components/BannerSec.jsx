// import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
// import { Autoplay } from 'swiper/modules';
export const BannerSec = () => {
  return (
    <div className='bannersec'>
      <Swiper loop={true} pagination={{clickable: true,}} autoplay={{ delay: 3000, disableOnInteraction: false, }} modules={[Pagination, Autoplay]} className="bannerslider">
        <SwiperSlide className='slide1'>
            <div className="bannercapion">
                <h3>Products That Make <span>a Statement</span></h3>
                <p>Huge range or products and decorating techniques. Promotions made easy with <span>BANG ON BRAND</span></p>
                <div className="btnsec"><Link to='#'>Know More</Link></div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='slide2'>
            <div className="bannercapion">
                <h3>Products That Make <span>a Statement</span></h3>
                <p>Huge range or products and decorating techniques. Promotions made easy with <span>BANG ON BRAND</span></p>
                <div className="btnsec"><Link to='#'>Know More</Link></div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='slide3'>
            <div className="bannercapion">
                <h3>Products That Make <span>a Statement</span></h3>
                <p>Huge range or products and decorating techniques. Promotions made easy with <span>BANG ON BRAND</span></p>
                <div className="btnsec"><Link to='#'>Know More</Link></div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='slide4'>
            <div className="bannercapion">
                <h3>Products That Make <span>a Statement</span></h3>
                <p>Huge range or products and decorating techniques. Promotions made easy with <span>BANG ON BRAND</span></p>
                <div className="btnsec"><Link to='#'>Know More</Link></div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='slide5'>
            <div className="bannercapion">
                <h3>Products That Make <span>a Statement</span></h3>
                <p>Huge range or products and decorating techniques. Promotions made easy with <span>BANG ON BRAND</span></p>
                <div className="btnsec"><Link to='#'>Know More</Link></div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='slide6'>
            <div className="bannercapion">
                <h3>Products That Make <span>a Statement</span></h3>
                <p>Huge range or products and decorating techniques. Promotions made easy with <span>BANG ON BRAND</span></p>
                <div className="btnsec"><Link to='#'>Know More</Link></div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}