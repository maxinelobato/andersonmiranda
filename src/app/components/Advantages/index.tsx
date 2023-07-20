import ButtonForm from '../ButtonForm'
export default function Advantages () {
  return (
    <>
    <div className="bg-gradient-to-r from-stone-950 to-stone-700">
      <section className='text-white'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
          <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-screen-2xl md:mb-0'>
            <h1 className='max-w-3xl mb-6 font-sans text-3xl font-bold text-orange-400 sm:text-5xl md:mx-auto'>
              <span className='relative inline-block'>
                <span className='relative bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500'>
                  Veja como podemos ajudar você com a nossa Modalidade de
                  Investimento
                </span>
              </span>
            </h1>
            <p className='font-medium text-sm text-white md:text-lg md:mt-2 md:block'>
              A corretora disponibiliza um capital para o
              especialista/investidor, mas para isso precisa atender alguns dos
              critérios, que somente um investidor com certificado pode lhe
              ajudar.
            </p>
          </div>
          <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <section>
              <div className='items-center px-8 py-4 pb-12 mx-auto max-w-7xl lg:px-16 md:px-12'>
                <div className='justify-center w-full lg:p-10 max-auto'>
                  <nav aria-label='Progress'>
                    <ol
                      role='list'
                      className='space-y-4 md:flex md:space-y-0 md:space-x-8'
                    >
                      <li className='md:flex-1'>
                        <div className='flex flex-col px-4 py-4 duration-200 border-l-4 border-orange-400 group backdrop-blur-lg rounded-lg bg-white/5 shadow-lg transition shadow-orange-400/70'>
                          <div className='inline-flex items-center w-full gap-3 mt-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='32'
                              height='32'
                              fill='currentColor'
                              viewBox='0 0 256 256'
                              className='text-orange-400'
                            >
                              <path d='M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM140,176a8,8,0,0,1-16,0V95l-11.56,7.71a8,8,0,1,1-8.88-13.32l24-16A8,8,0,0,1,140,80Z'></path>
                            </svg>
                            <span className='text-lg font-bold text-orange-400'>
                              Desafiante
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className='md:flex-1'>
                        <div className='flex flex-col px-4 py-4 duration-200 border-l-4 border-orange-400 group backdrop-blur-lg rounded-lg bg-white/5 shadow-lg transition shadow-orange-400/70'>
                          <div className='inline-flex items-center w-full gap-3 mt-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='32'
                              height='32'
                              fill='currentColor'
                              viewBox='0 0 256 256'
                              className='text-orange-400'
                            >
                              <path d='M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM152,168a8,8,0,0,1,0,16H104a8,8,0,0,1-6.4-12.8l43.17-57.56a16,16,0,1,0-27.86-15,8,8,0,0,1-15.09-5.34,32,32,0,1,1,55.74,29.93L120,168Z'></path>
                            </svg>
                            <span className='text-lg font-bold text-orange-400'>
                              Verificação
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className='md:flex-1'>
                        <div className='flex flex-col px-4 py-4 duration-200 border-l-4 border-green-400 group backdrop-blur-lg rounded-lg bg-white/5 shadow-lg transition shadow-green-400/70'>
                          <div className='inline-flex items-center w-full gap-3 mt-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='32'
                              height='32'
                              fill='currentColor'
                              viewBox='0 0 256 256'
                              className='text-green-400'
                            >
                              <path d='M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM124,184a35.71,35.71,0,0,1-25.71-10.81A8,8,0,1,1,109.71,162,20,20,0,1,0,124,128a8,8,0,0,1-6.55-12.59L136.63,88H104a8,8,0,0,1,0-16h48a8,8,0,0,1,6.55,12.59l-21,30A36,36,0,0,1,124,184Z'></path>
                            </svg>
                            <span className='text-lg font-bold text-green-400'>
                              Conta Real
                            </span>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </section>
          </div>
          <div className='text-center'>
            <ButtonForm />
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
