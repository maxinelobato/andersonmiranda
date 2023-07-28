import ButtonCTA from "../ButtonCTA";

export default function PriceCards() {
  const iconspricecards = {
    iconorange: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="h-5 w-5 text-orange-500"
      >
        <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
      </svg>
    ),
    iconwhite: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="h-5 w-5 text-white"
      >
        <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
      </svg>
    ),
  };

  return (
    <>
      <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-0">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center md:gap-8">
          <div className="rounded-2xl bg-black/40 shadow-inner p-6 sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-white/70">
                Mesa de $100k
              </h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-white sm:text-4xl">
                  $999
                </strong>
                <span className="text-sm font-medium text-white/70">
                  /Preço Único
                </span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                {iconspricecards.iconwhite}
                <span className="text-white/70">
                  Operação inicial de $5.000 dólares
                </span>
              </li>

              <li className="flex items-center gap-1">
                {iconspricecards.iconwhite}
                <span className="text-white/70">
                  Risco mínimo atingido até $12.000 dólares
                </span>
              </li>

              <li className="flex items-center gap-1">
                {iconspricecards.iconwhite}
                <span className="text-white/70">
                  Investimento da Mesa é $499,5 dólares
                </span>
              </li>

              <li className="flex items-center gap-1">
                {iconspricecards.iconwhite}
                <span className="text-white/70">
                  Investimento no Especialista é $499,5 dólares
                </span>
              </li>

              <li className="flex items-center gap-1">
                {iconspricecards.iconwhite}
                <span className="text-white/70">
                  Grupo exclusivo de WhatsApp
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <ButtonCTA />
            </div>
          </div>

          <div className="rounded-2xl bg-black/80 ring-1 ring-orange-500 shadow-lg shadow-orange-400/70 p-6 sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-white">
                Mesa de $200k
                <span className="sr-only">Plan</span>
              </h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-orange-500 sm:text-4xl">
                  $1.998
                </strong>
                <span className="text-sm font-medium text-white">
                  /Preço Único
                </span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                {iconspricecards.iconorange}
                <span className="text-orange-500/70">
                  Oportunidade de fazer Swing Trade
                </span>
              </li>
              <li className="flex items-center gap-1">
                {iconspricecards.iconorange}
                <span className="text-orange-500/70">
                  Operação inicial de $10.000 dólares
                </span>
              </li>
              <li className="flex items-center gap-1">
                {iconspricecards.iconorange}
                <span className="text-orange-500/70">
                  Risco mínimo atingido até $24.000 dólares
                </span>
              </li>
              <li className="flex items-center gap-1">
                {iconspricecards.iconorange}
                <span className="text-orange-500/70">
                  Investimento da Mesa é $999 dólares
                </span>
              </li>
              <li className="flex items-center gap-1">
                {iconspricecards.iconorange}
                <span className="text-orange-500/70">
                  Investimento no Especialista é $999 dólares
                </span>
              </li>
              <li className="flex items-center gap-1">
                {iconspricecards.iconorange}
                <span className="text-orange-500/70">
                  Grupo exclusivo de WhatsApp
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <ButtonCTA />
            </div>
          </div>

          <div className="rounded-2xl bg-black/40 shadow-inner p-6 sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-white/70">
                Mesa de $300k
              </h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-white sm:text-4xl">
                  $2.997
                </strong>
                <span className="text-sm font-medium text-white/70">
                  /Preço Único
                </span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                {iconspricecards.iconwhite}
                <span className="text-white/70">
                  Oportunidade de fazer Swing Trade
                </span>
              </li>

              <li className="flex items-center gap-1">
                {iconspricecards.iconwhite}
                <span className="text-white/70">
                  Operação inicial de $15.000 dólares
                </span>
              </li>

              <li className="flex items-center gap-1">
                {iconspricecards.iconwhite}
                <span className="text-white/70">
                  Risco mínimo atingido até $36.000 dólares
                </span>
              </li>

              <li className="flex items-center gap-1">
                {iconspricecards.iconwhite}
                <span className="text-white/70">
                  Investimento da Mesa é $1.498,5 dólares
                </span>
              </li>

              <li className="flex items-center gap-1">
                {iconspricecards.iconwhite}
                <span className="text-white/70">
                  Investimento no Especialista é $1.498,5 dólares
                </span>
              </li>

              <li className="flex items-center gap-1">
                {iconspricecards.iconwhite}
                <span className="text-white/70">
                  Grupo exclusivo de WhatsApp
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <ButtonCTA />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
