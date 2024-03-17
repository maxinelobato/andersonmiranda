import SwiperSlideTestimonials from '../SwiperSlideTestimonials'

export default function Testimonials() {
  return (
    <>
      <div className="bg-stone-950">
        <section>
          <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
              <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h1 className="mb-6 max-w-3xl font-sans text-3xl font-bold text-orange-400 sm:text-5xl md:mx-auto">
                  <span className="relative inline-block">
                    <span className="relative bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                      Veja o resultado dos Nossos Clientes
                    </span>
                  </span>
                </h1>
              </div>

              <div className="-mx-4 lg:col-span-2 lg:mx-0">
                <SwiperSlideTestimonials />
                {/* <div className="carousel carousel-center max-w-xs sm:max-w-screen-md p-4 space-x-6 rounded-lg backdrop-blur-lg border-1 border-orange-400 group shadow-lg shadow-orange-400/70">
                {featurestestimonials.map((item, idx) => (
                  <div key={idx} className="carousel-item ">
                    <div className="card w-96">
                      <blockquote className="rounded-lg flex h-full flex-col justify-between p-12 transition border-2 border-orange-400 group backdrop-blur-lg">
                        <div>
                          <div className="flex gap-0.5 text-yellow-500">
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
                            <p className="mt-4 leading-relaxed text-xs text-gray-500">
                              {item.socialprove}
                            </p>
                          </div>
                        </div>
                        <footer className="mt-8 text-sm text-gray-500">
                          &mdash; {item.friends}
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
