// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';

function Review() {
  return (
    <Swiper
      modules={[Autoplay]}           // important
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{
        delay: 2000,                // 2 seconds
        disableOnInteraction: false // touch करने के बाद भी auto चलेगा
      }}
      loop={true}                   // infinite looping
    >
      <SwiperSlide>
        <div className="border h-40 w-80 bg-green-100 rounded">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border h-40 w-80 bg-green-100 rounded">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border h-40 w-80 bg-green-100 rounded">Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border h-40 w-80 bg-green-100 rounded">Slide 4</div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Review;


