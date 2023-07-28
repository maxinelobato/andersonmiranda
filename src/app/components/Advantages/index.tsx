import PriceCards from "../PriceCards";

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
          className="h-5 w-5 text-orange-500"
        >
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: "Não utiliza o Capital Próprio",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-5 w-5 text-orange-500"
        >
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: "Investimento Baixo à Partir de $1000 Dólares",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-5 w-5 text-orange-500"
        >
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: "Saldo em Banca à Partir de $100.000 mil Dólares",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-5 w-5 text-orange-500"
        >
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: "Recebimento em Dólar",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-5 w-5 text-orange-500"
        >
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: "Boa % de Pagamento",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-5 w-5 text-orange-500"
        >
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: "Você Não Assume Perdas",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-5 w-5 text-orange-500"
        >
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: "Pode Fazer Quantas Avaliações Quiser",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-5 w-5 text-orange-500"
        >
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: "Limite por CPF de até $600.000 mil dólares",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-5 w-5 text-orange-500"
        >
          <path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path>
        </svg>
      ),
      title: "Operação com Capital Maior",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-stone-950 to-stone-700">
        <section className="text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-screen-2xl md:mb-0">
              <h1 className="max-w-3xl mb-6 font-sans text-3xl font-bold text-white sm:text-5xl md:mx-auto">
                Você já ouviu falar de <br />{" "}
                <span className="text-orange-500">
                  Mesa Proprietária Americana
                </span>
                ?
              </h1>
              <p className="text-center font-medium text-xs text-white md:text-lg md:mt-2 md:block">
                É quando uma corretora americana disponibiliza um capital a um
                único preço, sem que você arrisque o seu próprio capital
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {featuresadvantages.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="shrink-0 rounded-lg border border-orange-500 bg-black p-1">
                    {item.icon}
                  </span>
                  <div>
                    <h2 className="text-sm font-medium">{item.title}</h2>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-xl mt-10 mb-10 md:mx-auto sm:text-center lg:max-w-screen-2xl md:mb-0">
              <p className="text-center font-medium text-xs text-white md:text-lg md:mt-2 md:block">
                Obs.: Todas as contas passam por 2 fases de avaliação:
              </p>
              <p className="text-center font-normal text-xs text-orange-500 md:text-lg md:mt-2 md:block">
                <span className="font-bold">1ª Fase de Avaliação</span> ={" "}
                <span className="font-bold">8% da conta</span>, ou seja, em uma
                conta de
                <span className="font-bold"> $100k</span> é o equivalente a{" "}
                <span className="font-bold">$8 mil dólares</span>
              </p>
              <p className="text-center font-normal text-xs text-orange-500 md:text-lg md:mt-2 md:block">
                <span className="font-bold">2ª Fase de Avaliação</span> ={" "}
                <span className="font-bold">5% da conta</span>, ou seja, em uma
                conta de
                <span className="font-bold"> $100k</span> é o equivalente a{" "}
                <span className="font-bold">$5 mil dólares</span>
              </p>
              <p className="text-center font-normal text-xs text-orange-500 md:text-lg md:mt-2 md:block">
                <span className="font-bold">Conta Real</span> ={" "}
                <span className="font-bold">13% da conta</span>, ou seja, em uma
                conta de
                <span className="font-bold"> $100k</span> é o equivalente a{" "}
                <span className="font-bold">$13 mil dólares</span> irá começar
                novamente para o recebimento do saque em seu nome
              </p>
            </div>

            <PriceCards />
          </div>
        </section>
      </div>
    </>
  );
}
