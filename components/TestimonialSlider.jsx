'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function TestimonialSlider({ testimonials }) {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} loop autoplay>
      {testimonials.map((t, i) => (
        <SwiperSlide key={i}>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <p className="italic text-gray-600 dark:text-gray-300">{t.quote}</p>
            <p className="font-semibold mt-2">— {t.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
