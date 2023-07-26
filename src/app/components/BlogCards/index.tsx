import Image from "next/image";

export default function BlogCards() {
  const blogcardnotice = [
    {
      src: "/warrenbuffett.webp",
      title:
        "“O risco vem de não saber o que você está fazendo.” - Warren Buffet",
      subtitle:
        "É preciso saber onde se está pisando antes de tomar uma ação — e não é diferente no mundo dos investimentos.",
    },
    {
      src: "/gulhermecardoso.png",
      title:
        "“Perdedores e ganhadores têm a mesma meta - ganhar, porém os ganhadores têm método.” - Guilherme Cardoso",
      subtitle: "O método protege suas operações.",
    },
  ];
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-center font-medium text-xl text-white md:mt-2 md:block">
            O que as{" "}
            <span className="text-orange-500">
              referências do mercado financeiro
            </span>{" "}
            falam...
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {blogcardnotice.map((item, idx) => (
            <article
              key={idx}
              className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            >
              <Image
                alt="Blog Cards"
                src={item.src}
                className="absolute inset-0 h-full w-full object-cover"
                width={600}
                height={600}
                loading="lazy"
              />
              <div className="relative hero-overlay bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-8">
                  <h1 className="mt-0.5 text-xl font-medium uppercase text-white">
                    {item.title}
                  </h1>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
