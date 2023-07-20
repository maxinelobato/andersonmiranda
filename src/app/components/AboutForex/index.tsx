import Image from "next/image";

export default function AboutForex() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title: "Diversificar a Renda",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title: "Receber em Dólar",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title: "Liberdade Financeira",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title: "Liberdade Geográfica",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title: "Viajar Mais",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title: "Múltiplas Fontes de Renda",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title: "Ter uma Aposentadoria Digna",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title: "Ter mais Tempo Livre",
    },
  ];

  return (
    <>
        <div className="bg-stone-950">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                <div className="max-w-xl mb-6">
                  <h1 className="max-w-3xl mb-6 font-sans text-3xl font-bold text-orange-400 sm:text-5xl md:mx-auto">
                    <span className="relative inline-block">
                      <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500">
                        Você sabe por que as pessoas investem no Mercado
                        Financeiro?
                      </span>
                    </span>
                  </h1>
                  <p className="font-medium text-sm text-white md:text-lg md:mt-2 md:block">
                    Veja se você possui algum desses requisitos para investir
                    neste mercado.
                  </p>
                </div>
                <div className="pt-2 max-w-lg lg:max-w-none">
                  <ul className="space-y-2">
                    {features.map((item, idx) => (
                      <li key={idx} className="flex gap-x-4">
                        <div className="flex-none w-8 h-8 text-orange-500 rounded-lg flex justify-center items-center">
                          {item.icon}
                        </div>
                        <div>
                          <h1 className="mt-1 text-sm text-white">
                            {item.title}
                          </h1>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center -mx-4 lg:pl-8">
                <div className="flex flex-col items-end px-3">
                  <Image
                    className="object-cover mb-6 rounded shadow-lg border-s-4 border-orange-500/80 shadow-orange-500/80 h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                    width={600}
                    height={600}
                    src="https://images.unsplash.com/photo-1559734840-f9509ee5677f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                    alt="Image 1"
                  />
                  <Image
                    className="object-cover w-20 h-20 rounded shadow-lg border-s-4 border-orange-500/80 shadow-orange-500/80 sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                    width={600}
                    height={600}
                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Image 2"
                  />
                </div>
                <div className="px-3">
                  <Image
                    className="object-cover w-40 h-40 rounded shadow-lg border-s-4 border-orange-500/80 shadow-orange-500/80 sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                    width={600}
                    height={600}
                    src="https://images.unsplash.com/photo-1570961999607-df226979f156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80"
                    alt="Image 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
