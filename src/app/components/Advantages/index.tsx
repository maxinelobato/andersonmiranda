// import PriceCards from "../PriceCards";
// import TabsPhases from "../TabsPhases";

export default function Advantages() {
  const featuresadvantages = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: 'Não utiliza o Capital Próprio',
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
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: 'Investimento Baixo à Partir de $1000 Dólares',
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
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: 'Saldo em Banca à Partir de $100.000 mil Dólares',
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
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: 'Recebimento em Dólar',
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
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: 'Boa % de Pagamento',
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
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: 'Você Não Assume Perdas',
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
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: 'Pode Fazer Quantas Avaliações Quiser',
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
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: 'MFF o Limite por CPF de até $600 mil dólares',
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
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: 'FTMO o Limite por CPF de até $400 mil dólares',
    },
  ]

  return (
    <>
      <div className="bg-gradient-to-r from-stone-950 to-stone-700">
        <section className="text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-0 lg:max-w-screen-2xl">
              <h1 className="mb-6 max-w-3xl font-sans text-2xl font-bold text-white sm:text-5xl md:mx-auto">
                Você já ouviu falar de <br />{' '}
                <span className="text-orange-500">
                  Mesa Proprietária Americana
                </span>
                ?
              </h1>
              <p className="text-center text-sm font-medium text-white sm:text-base md:mt-2 md:block">
                É quando uma corretora americana disponibiliza um capital a um
                único preço, sem que você arrisque o seu próprio capital
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {featuresadvantages.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="h-8 w-8 shrink-0 rounded-lg p-1 text-orange-500">
                    {item.icon}
                  </span>
                  <div>
                    <h2 className="mt-1 text-sm text-white">{item.title}</h2>
                  </div>
                </div>
              ))}
            </div>

            {/* <PriceCards /> */}

            {/* <div className="max-w-5xl mt-6 md:mx-auto sm:text-center">
              <p className="text-center font-medium text-xs text-white md:text-lg md:block">
                Entenda como funciona a{" "}
                <span className="text-orange-500">
                  Mesa Proprietária Americana
                </span> e as fases de{" "}
                <span className="text-orange-500">avaliação e aprovação das corretoras</span>
              </p>
            </div>
            <div className="max-w-xl mx-auto">
              <TabsPhases />
            </div> */}
          </div>
        </section>
      </div>
    </>
  )
}
