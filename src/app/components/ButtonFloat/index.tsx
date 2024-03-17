import Image from 'next/image'

export default function ButtonFloat() {
  return (
    <>
      <div className="group fixed bottom-4 right-4 z-[100] flex h-24 w-24 items-end justify-end p-2 hover:-translate-x-0 hover:scale-110 hover:transition-all hover:duration-300">
        <div className="absolute z-50 flex items-center justify-center">
          <a
            href="https://api.whatsapp.com/send?phone=5511913541327&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20uma%20Mesa%20Proprietária%20Americana.%20Podemos%20conversar%3F%20"
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            <div
              className="tooltip tooltip-success tooltip-left tooltip-open text-white"
              data-tip="Precisa de ajuda?"
            >
              <div className="avatar online">
                <div className="w-12 rounded-full backdrop-blur-sm">
                  <Image
                    alt="avatar"
                    width={300}
                    height={300}
                    src="/lborg.svg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
