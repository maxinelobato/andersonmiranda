export default function ButtonArrowDown () {
  return (
    <>
      <div
        aria-label='Rolar para baixo'
        className='flex items-center justify-center w-10 h-10 mx-auto bg-black/30 text-orange-500 border-2 border-orange-400 rounded-full'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='currentColor'
        >
          <path d='M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z' />
        </svg>
      </div>
    </>
  )
}
