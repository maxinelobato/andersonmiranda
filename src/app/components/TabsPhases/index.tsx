'use client'

export default function TabsPhases() {
  const iconstabsphases = {
    iconorange: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-orange-500"
      >
        <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
      </svg>
    ),
    iconorangesmall: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-orange-500"
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
        className="text-white/30"
      >
        <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128ZM48,100a28,28,0,1,0,28,28A28,28,0,0,0,48,100Zm160,0a28,28,0,1,0,28,28A28,28,0,0,0,208,100Z"></path>
      </svg>
    ),
    iconwallet: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-orange-500"
      >
        <path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm-36,80a12,12,0,1,1,12-12A12,12,0,0,1,180,152Z"></path>
      </svg>
    ),
    iconfiles: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-orange-500"
      >
        <path d="M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM136,192H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64,24H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Z"></path>
      </svg>
    ),
  }

  return (
    <>
      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-xl">
          <div className="flex">
            <div className="mr-6 flex flex-col items-center">
              <div className="h-10 w-px opacity-0 sm:h-full" />
              <div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium">
                  1
                </div>
              </div>
              <div className="h-full w-px bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
              <div className="sm:mr-5">
                <div className="my-3 flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black shadow-2xl sm:h-20 sm:w-20">
                  {iconstabsphases.iconwhite}
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base">
                  Abertura de Conta
                </p>
                <p className="text-sm text-orange-500">
                  Nas corretora de sua escolha, FTMO ou myForexFunds
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-6 flex flex-col items-center">
              <div className="h-10 w-px bg-gray-300 sm:h-full" />
              <div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium">
                  2
                </div>
              </div>
              <div className="h-full w-px bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
              <div className="sm:mr-5">
                <div className="my-3 flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black shadow-2xl sm:h-20 sm:w-20">
                  {iconstabsphases.iconwhite}
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base">
                  Fase Desafiante
                </p>
                <p className="text-sm text-orange-500">Atingir 8% da conta</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-6 flex flex-col items-center">
              <div className="h-10 w-px bg-gray-300 sm:h-full" />
              <div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium">
                  3
                </div>
              </div>
              <div className="h-full w-px bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
              <div className="sm:mr-5">
                <div className="my-3 flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black shadow-2xl sm:h-20 sm:w-20">
                  {iconstabsphases.iconwhite}
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base">
                  Fase de Verificação
                </p>
                <p className="text-sm text-orange-500">Atingir 5% da conta</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-6 flex flex-col items-center">
              <div className="h-10 w-px bg-gray-300 sm:h-full" />
              <div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium">
                  4
                </div>
              </div>
              <div className="h-full w-px bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
              <div className="sm:mr-5">
                <div className="my-3 flex h-16 w-16 items-center justify-center rounded-full border border-orange-500 bg-black shadow-2xl sm:h-20 sm:w-20">
                  {iconstabsphases.iconorange}
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base">Conta Real</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-1">
                    {iconstabsphases.iconorangesmall}
                    <span className="text-sm leading-5 text-orange-500">
                      Irá iniciar em Conta Real após 90 dias
                    </span>
                  </li>
                  <li className="flex items-center gap-1">
                    {iconstabsphases.iconorangesmall}
                    <span className="text-sm leading-5 text-orange-500">
                      1ª Saque em 30 dias
                    </span>
                  </li>
                  <li className="flex items-center gap-1">
                    {iconstabsphases.iconorangesmall}
                    <span className="text-sm leading-5 text-orange-500">
                      2º Saque em diante, de 15 em 15 dias
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-6 flex flex-col items-center">
              <div className="h-10 w-px bg-gray-300 sm:h-full" />
              <div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium">
                  5
                </div>
              </div>
              <div className="h-full w-px bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
              <div className="sm:mr-5">
                <div className="my-3 flex h-16 w-16 items-center justify-center rounded-full border border-orange-500 bg-black shadow-2xl sm:h-20 sm:w-20">
                  {iconstabsphases.iconfiles}
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base">
                  Contrato de Adesão
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-1">
                    {iconstabsphases.iconorangesmall}
                    <span className="text-sm leading-5 text-orange-500">
                      50% para o Especialista
                    </span>
                  </li>
                  <li className="flex items-center gap-1">
                    {iconstabsphases.iconorangesmall}
                    <span className="text-sm leading-5 text-orange-500">
                      50% para o Recebedor
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-6 flex flex-col items-center">
              <div className="h-10 w-px bg-gray-300 sm:h-full" />
              <div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium">
                  6
                </div>
              </div>
              <div className="h-full w-px opacity-0" />
            </div>
            <div className="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
              <div className="sm:mr-5">
                <div className="my-3 flex h-16 w-16 items-center justify-center rounded-full border border-orange-500 bg-black shadow-2xl sm:h-20 sm:w-20">
                  {iconstabsphases.iconwallet}
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base">
                  Recebimento em Conta
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-1">
                    {iconstabsphases.iconorangesmall}
                    <span className="text-sm leading-5 text-orange-500">
                      Iremos lhe auxiliar, passo a passo
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
