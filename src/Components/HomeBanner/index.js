import React from "react";
import Slider from "react-slick";


const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
      };
    return (

        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Men_web_4a8105e1e9/Men_web_4a8105e1e9.png" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Footwear_web_a3138d1dc9/Footwear_web_a3138d1dc9.png" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Fragrance_web_4b9a986649/Fragrance_web_4b9a986649.png" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Watch_web_c3b450ab2b/Watch_web_c3b450ab2b.png" className="w-100"/>
                </div>
            </Slider>
        </div>
    )

}

export default HomeBanner;