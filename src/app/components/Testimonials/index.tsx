export default function Testimonials() {
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
      title: "Diversificar a Renda",
      socialprove:
        "Conheci o Anderson há 5 anos atrás e nem imaginava que ele tinha se tornado especialista no mercado financeiro. Vimos o que ele estava fazendo e quis saber mais, estava quebrada financeiramente, só sobrevivíamos com no máximo 2mil por mês. <br/> Pedi um cartão emprestado pra poder começar o investimento e foi a melhor coisa que aconteceu em nossas vidas. Gratidão por tudo meu amigo, foi salvou a nossa vida! Muito obrigada de coração!",
      friends: "Organizações Lima Barreto",
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
      title: "Montar um Negócio",
      socialprove:
        "Precisava de uma grana e comecei a investir!",
      friends: "Organizações Lima Barreto",
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
      title: "Montar um Negócio",
      socialprove:
        "Precisava de uma grana e comecei a investir!",
      friends: "Organizações Lima Barreto",
    },
  ];
  return (
    <>
    <div className="bg-stone-950">
      <section>
        <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="max-w-3xl mb-6 font-sans text-3xl font-bold text-orange-400 sm:text-5xl md:mx-auto">
                <span className="relative inline-block">
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500">
                    Veja o resultado dos Nossos Clientes
                  </span>
                </span>
              </h1>
            </div>

            <div className="-mx-4 lg:col-span-2 lg:mx-0">
              <div className="carousel carousel-center max-w-xs sm:max-w-screen-md p-4 space-x-6 rounded-lg backdrop-blur-lg border-1 border-orange-400 group shadow-lg shadow-orange-400/70">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
