import Image from "next/image";
import ButtonArrowDown from "../ButtonArrowDown";
import ButtonForm from "../ButtonForm";
export default function Hero() {
  return (
    <>
      <div className="bg-no-repeat bg-fixed bg-cover bg-[url(https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)]">
        <div className="bg-gradient-to-t from-stone-950">
          <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
            <div className="max-w-xl sm:mx-auto lg:max-w-3xl">
              <div className="flex flex-col sm:text-center sm:mb-0">
                <div className="mb-12 sm:mb-14 mx-auto">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-teal-accent-400">
                    <Image
                      width={100}
                      height={100}
                      src="/anderson_miranda.svg"
                      alt="Logo Anderson"
                      loading="lazy"
                    />
                    {/* <p className="ml-4 font-bold text-lg text-center text-white sm:text-left sm:text-2xl">
                      Anderson Miranda
                    </p> */}
                  </div>
                </div>
                <div className="max-w-full pb-10 md:mx-auto text-center lg:max-w-5xl md:mb-4">
                  <div className="rounded-lg p-6 w-auto h-auto backdrop-blur-lg border border-stone-500 bg-white/5 shadow-lg">
                    <h1 className="max-w-3xl mb-4 font-sans text-3xl font-bold text-orange-400 sm:text-5xl md:mx-auto">
                      <span className="relative inline-block">
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          className="absolute top-0 left-0 z-0 w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                          <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path>
                        </svg> */}
                        <p className="relative text-white">
                          Saiba como investir no Mercado Financeiro
                        </p>
                      </span>
                    </h1>
                    <p className="text-center font-medium text-xs text-white/75 md:text-lg md:mt-2 md:block">
                      Tenha um especialista e Professor de Prop Trading investindo
                      pra você nas melhores ações da Bolsa Americana.
                    </p>
                    <p className="text-center font-medium text-white/75 text-xs md:text-lg md:mt-2 md:block">
                      <span className="text-blue-400 font-bold">NASDAQ, Apple, Google, Facebook, Netflix</span> e muitas outras.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <ButtonForm />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-0 pb-2">
            <ButtonArrowDown />
          </div>
        </div>
      </div>
    </>
  );
}
