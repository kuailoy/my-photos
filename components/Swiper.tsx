import { EffectFade, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation' // Navigation module
import 'swiper/css/pagination' // Pagination module
import { Swiper, SwiperSlide } from 'swiper/react'
// import styles from '@/styles/Swiper.module.css'

const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade]}
      effect="fade"
      loop
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      // spaceBetween={30}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  )
}

export default MySwiper
