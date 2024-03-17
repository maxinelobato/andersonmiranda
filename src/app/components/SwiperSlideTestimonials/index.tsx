'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

export default function SwiperSlideTestimonials() {
  const featurestestimonials = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-5 w-5"
        >
          <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
        </svg>
      ),
      title: 'Diversificar a Renda',
      socialprove:
        'Conheci o Anderson há 5 anos atrás e nem imaginava que ele tinha se tornado especialista no mercado financeiro. Vimos o que ele estava fazendo e quis saber mais, estava quebrada financeiramente, só sobrevivíamos com no máximo 2mil por mês. <br/> Pedi um cartão emprestado pra poder começar o investimento e foi a melhor coisa que aconteceu em nossas vidas. Gratidão por tudo meu amigo, foi salvou a nossa vida! Muito obrigada de coração!',
      friends: 'Organizações Lima Barreto',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-5 w-5"
        >
          <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
        </svg>
      ),
      title: 'Montar um Negócio',
      socialprove: 'Precisava de uma grana e comecei a investir!',
      friends: 'Organizações Lima Barreto',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-5 w-5"
        >
          <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
        </svg>
      ),
      title: 'Ter Tempo Livre',
      socialprove: 'Precisava de uma grana e comecei a investir!',
      friends: 'Organizações Lima Barreto',
    },
  ]

  return (
    <>
      <div className="carousel-item">
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          navigation={true}
        >
          {featurestestimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="card w-fit">
                <blockquote className="group flex h-full flex-col justify-between rounded-lg border-l-2 border-orange-400 p-12 backdrop-blur-lg transition">
                  <div className="mx-auto justify-items-center">
                    <div className="flex gap-1 text-yellow-500">
                      {item.icon}
                      {item.icon}
                      {item.icon}
                      {item.icon}
                      {item.icon}
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-orange-600 sm:text-3xl">
                        {item.title}
                      </p>
                      <p className="mt-4 text-xs leading-relaxed text-gray-500">
                        {item.socialprove}
                      </p>
                    </div>
                  </div>
                  <footer className="mt-8 text-sm text-gray-500">
                    &mdash; {item.friends}
                  </footer>
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
