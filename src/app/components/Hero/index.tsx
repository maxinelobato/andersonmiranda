import Image from "next/image";
import ButtonArrowDown from "../ButtonArrowDown";
import ButtonCTA from "../ButtonCTA";

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
      title: "Seja nosso sócio VIP",
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
      title: "Conheça nossa comunidade",
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
      title: "Saiba diversificar sua renda",
    },
  ];

  return (
    <>
      <section className="bg-no-repeat bg-fixed bg-cover bg-[url(https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)]">
        <div className="bg-gradient-to-t from-stone-950 via-black/60 to-stone-900">
          <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
            <div className="max-w-xl sm:mx-auto lg:max-w-3xl">
              <div className="flex flex-col sm:text-center sm:mb-0">
                <div className="mb-8 sm:mb-14 mx-auto">
                  <div className="flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-teal-accent-400">
                    <Image
                      width={300}
                      height={300}
                      src="/anderson_miranda.svg"
                      alt="Logo Anderson"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="max-w-full pb-10 md:mx-auto text-center lg:max-w-5xl md:mb-4">
                  <h1 className="max-w-3xl mb-4 font-sans font-bold text-orange-400 text-2xl sm:text-5xl md:mx-auto">
                    <span className="relative inline-block">
                      <p className="relative text-white">
                        Quer investir no seu{" "}
                        <span className="text-orange-500">
                          futuro e não sabe como?
                        </span>
                      </p>
                    </span>
                  </h1>
                  <p className="text-center font-medium text-sm sm:text-base md:mt-2 md:block text-white">
                    Faça o seu dinheiro trabalhar pra você e não o contrário
                  </p>
                  <div className="pt-4">
                    <ul className="space-y-1">
                      {features.map((item, idx) => (
                        <li key={idx} className="flex gap-x-1 justify-center">
                          <div className="flex-none w-6 h-6 text-orange-500 rounded-lg flex justify-center items-center">
                            {item.icon}
                          </div>
                          <div>
                            <h1 className="mt-1 text-white text-sm md:block">
                              {item.title}
                            </h1>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="text-center -mt-4">
                  <ButtonCTA />
                </div>
              </div>
            </div>
          </div>
          <div className="pb-2">
            <ButtonArrowDown />
          </div>
        </div>
      </section>
    </>
  );
}
