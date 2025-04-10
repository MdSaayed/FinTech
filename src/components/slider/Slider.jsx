import React from 'react';
import PropTypes from 'prop-types'; // For props validation
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Slider = ({
  items = [], // Default empty array to prevent errors
  imageHeight = 'h-full', // Height of the images
  imageWidth = 'w-full', // Width of the images
  spaceBetween = 24, // Space between slides
  direction = 'horizontal', // Swiper direction
  slidesPerViewMobile = 2, // Slides per view for mobile
  slidesPerViewTablet = 3, // Slides per view for tablet
  slidesPerViewDesktop = 5, // Slides per view for desktop
  autoplayDelay = 0, // Autoplay delay
  loop = true, // Infinite loop
  speed = 3000, // Transition speed
  reverseDirection = false, // Reverse direction for autoplay
}) => {
  return (
    <Swiper
      loop={loop}
      speed={speed}
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
        reverseDirection: reverseDirection, // Reverse direction for autoplay
      }}
      modules={[Autoplay]}
      className="mt-5"
      direction={direction}
      breakpoints={{
        320: {
          slidesPerView: slidesPerViewMobile,
          spaceBetween: spaceBetween / 2,
        },
        768: {
          slidesPerView: slidesPerViewTablet,
          spaceBetween: spaceBetween / 2,
        },
        1024: {
          slidesPerView: slidesPerViewDesktop,
          spaceBetween: spaceBetween,
        },
      }}
    >
      {(items?.length > 0 ? items.concat(items) : []).map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item}
            alt={`Slide ${index + 1}`}
            className={`${imageHeight} ${imageWidth} object-cover`} // Dynamic height and width
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Props validation
Slider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string), // Array of image URLs
  imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Height of images
  imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Width of images
  spaceBetween: PropTypes.number, // Space between slides
  direction: PropTypes.oneOf(['horizontal', 'vertical']), // Swiper direction
  slidesPerViewMobile: PropTypes.number, // Slides per view for mobile
  slidesPerViewTablet: PropTypes.number, // Slides per view for tablet
  slidesPerViewDesktop: PropTypes.number, // Slides per view for desktop
  autoplayDelay: PropTypes.number, // Autoplay delay
  loop: PropTypes.bool, // Infinite loop
  speed: PropTypes.number, // Transition speed
  reverseDirection: PropTypes.bool, // Reverse direction for autoplay
};

// Default props
Slider.defaultProps = {
  items: [], // Ensures `items` is always defined
  imageHeight: 'auto',
  imageWidth: 'auto',
  spaceBetween: 10,
  direction: 'horizontal',
  slidesPerViewMobile: 2,
  slidesPerViewTablet: 3,
  slidesPerViewDesktop: 5,
  autoplayDelay: 0,
  loop: true,
  speed: 3000,
  reverseDirection: false, // Default to normal direction (right-to-left)
};

export default Slider;
