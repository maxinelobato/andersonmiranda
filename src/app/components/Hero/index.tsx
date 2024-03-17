import Image from 'next/image'
import ButtonArrowDown from '../ButtonArrowDown'
import ButtonCTA from '../ButtonCTA'

export default function Hero() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>
        </svg>
      ),
      title: 'Seja nosso sócio VIP',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>
        </svg>
      ),
      title: 'Acesso ao Clube do Livro e Áudios',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>
        </svg>
      ),
      title: 'Network com Nossos Sócios',
    },
  ]

  return (
    <>
      <section className="bg-[url(https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-fixed bg-no-repeat">
        <div className="bg-gradient-to-t from-stone-950 via-black/60 to-stone-900">
          <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="max-w-xl sm:mx-auto lg:max-w-3xl">
              <div className="flex flex-col sm:mb-0 sm:text-center">
                <div className="mx-auto mb-8 sm:mb-14">
                  <div className="bg-teal-accent-400 flex h-20 w-20 items-center justify-center rounded-full sm:h-28 sm:w-28">
                    <Image
                      width={300}
                      height={300}
                      src="/anderson_miranda.svg"
                      alt="Logo Anderson"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="max-w-full pb-10 text-center md:mx-auto md:mb-4 lg:max-w-5xl">
                  <h1 className="mb-4 max-w-3xl font-sans text-2xl font-bold text-orange-400 sm:text-5xl md:mx-auto">
                    <span className="relative inline-block">
                      <p className="relative text-white">
                        Quer investir no seu{' '}
                        <span className="text-orange-500">
                          futuro e não sabe como?
                        </span>
                      </p>
                    </span>
                  </h1>
                  <p className="text-center text-sm font-medium text-white sm:text-base md:mt-2 md:block">
                    Faça o seu dinheiro trabalhar pra você e não o contrário
                  </p>
                  <div className="pt-4">
                    <ul className="space-y-1">
                      {features.map((item, idx) => (
                        <li key={idx} className="flex justify-center gap-x-1">
                          <div className="flex h-6 w-6 flex-none items-center justify-center rounded-lg text-orange-500">
                            {item.icon}
                          </div>
                          <div>
                            <h1 className="mt-1 text-sm text-white md:block">
                              {item.title}
                            </h1>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="-mt-4 text-center">
                  <ButtonCTA />
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-8 pb-4">
            <ButtonArrowDown />
          </div>
        </div>
      </section>
    </>
  )
}
