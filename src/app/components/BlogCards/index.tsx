import Image from 'next/image'

export default function BlogCards() {
  const blogcardnotice = [
    {
      src: '/warrenbuffett.webp',
      title: '“O risco vem de não saber o que você está fazendo.”',
      subtitle:
        'É preciso saber onde se está pisando antes de tomar uma ação — e não é diferente no mundo dos investimentos.',
      people: 'Warren Buffet',
    },
    {
      src: '/gulhermecardoso.png',
      title:
        '“Perdedores e ganhadores têm a mesma meta - ganhar, porém os ganhadores têm método.”',
      subtitle: 'O método protege suas operações.',
      people: 'Guilherme Cardoso',
    },
    {
      src: '/thiagonigro.jpg',
      title:
        '“Se você não lutar pelo futuro que quer, vai ter que aceitar o futuro que vier.”',
      subtitle: 'Você precisa de uma decião.',
      people: 'Thiago Nigro',
    },
  ]
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-center text-2xl font-medium text-white md:mt-2 md:block">
            O que as{' '}
            <span className="text-orange-500">
              referências do mercado financeiro
            </span>{' '}
            falam...
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
          {blogcardnotice.map((item, idx) => (
            <article
              key={idx}
              className="relative overflow-hidden rounded-lg shadow-lg shadow-orange-400/70"
            >
              <Image
                alt="Blog Cards"
                src={item.src}
                className="absolute inset-0 h-full w-full object-cover"
                width={600}
                height={600}
                loading="lazy"
              />
              <div className="hero-overlay relative bg-black/60 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-8">
                  <h1 className="mt-16 text-sm font-medium uppercase text-white sm:text-xl">
                    {item.title}
                  </h1>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    {item.subtitle}
                  </p>
                  <p className="mt-2 line-clamp-3 text-xs/relaxed font-bold text-white/95">
                    {item.people}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
