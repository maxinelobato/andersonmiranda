import Image from "next/image";

export default function ButtonFloat() {
  return (
    <>
      <div className="z-[100] group fixed bottom-4 right-4 p-2 flex items-end justify-end w-24 h-24 hover:-translate-x-0 hover:duration-300 hover:scale-110 hover:transition-all">
        <div className="flex items-center justify-center z-50 absolute">
          <a
            href="https://api.whatsapp.com/send?phone=5511913541327&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20uma%20Mesa%20Proprietária%20Americana.%20Podemos%20conversar%3F%20"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <div
              className="tooltip tooltip-open tooltip-left tooltip-success text-white"
              data-tip="Precisa de ajuda?"
            >
              <div className="avatar online">
                <div className="w-12 rounded-full bg-black">
                  <Image
                  className=""
                    alt="avatar"
                    width={300}
                    height={300}
                    src="/anderson_miranda.svg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
