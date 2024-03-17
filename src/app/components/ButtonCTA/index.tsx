import Link from 'next/link'

export default function ButtonCTA() {
  return (
    <>
      <button className="btn glass btn-md rounded-lg bg-gradient-to-r from-red-700 via-orange-500 to-orange-600 font-bold text-white drop-shadow-[5px_5px_15px_rgba(227,80,14,0.8)] delay-75 duration-300 ease-in-out sm:btn-lg md:btn-lg lg:btn-lg hover:scale-105 hover:text-white hover:ring hover:ring-white hover:ring-offset-0 hover:transition-all focus:outline-none focus:ring focus:ring-white active:text-opacity-75">
        <Link
          href="https://api.whatsapp.com/send?phone=351933965256&text=Ol%C3%A1%2C%20Dr.%20Anderson!%20Vim%20pelo%20site%20e%20Preciso%20de%20Ajuda%20com%20a%20minha%20Cidadania/Nacionalidade.%20Podemos%20conversar%3F%20"
          target="_blank"
        >
          Entre em contato
        </Link>
      </button>
    </>
  )
}
