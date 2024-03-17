'use client'

export default function Navbar() {
  return (
    <>
      <div className="navbar fixed top-0 z-10 bg-black/10 text-white backdrop-blur-lg hover:text-orange-400 focus:text-orange-500">
        <div className="navbar-start">
          <details className="dropdown">
            <summary tabIndex={0} className="btn btn-circle btn-ghost m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </summary>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-black/70 p-2 backdrop-blur-lg"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </details>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl normal-case">daisyUI</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-circle btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#f2f2f2"
              viewBox="0 0 256 256"
            >
              <path d="M152.58,145.23l23,11.48A24,24,0,0,1,152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-40,24a8,8,0,0,0-4.42-7.16l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88A40,40,0,0,0,192,152Z"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* <nav className="z-10 fixed top-0 flex w-full flex-wrap items-center justify-between text-white shadow-lg hover:text-orange-400 focus:text-orange-500">
        <div className="flex w-full flex-wrap items-center justify-between">
          <div className="navbar bg-black/10 backdrop-blur-lg">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <div id="scrollspy1" className="sticky-top">
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a
                        data-te-nav-link-ref
                        data-te-nav-link-active
                        href="#hero"
                      >
                        Início
                      </a>
                    </li>
                    <li>
                      <a
                        data-te-nav-link-ref
                        data-te-nav-link-active
                        href="#nossospilares"
                      >
                        Nossos Pilares
                      </a>
                    </li>
                    <li>
                      <a
                        data-te-nav-link-ref
                        data-te-nav-link-active
                        href="#porqueinvestir"
                      >
                        Por que Investir?
                      </a>
                    </li>
                    <li>
                      <a
                        data-te-nav-link-ref
                        data-te-nav-link-active
                        href="#diversificararenda"
                      >
                        Plano Diversificar a Renda
                      </a>
                    </li>
                    <li>
                    <a
                      data-te-nav-link-ref
                      data-te-nav-link-active
                      href="#nossosparceiros"
                    >
                      Nossos Parceiros
                    </a>
                  </li>
                  </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">AM</a>
                <div className="mx-auto">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-teal-accent-400">
                    <Image
                      width={300}
                      height={300}
                      src="/anderson_miranda.svg"
                      alt="Logo Anderson"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <div id="scrollspy1" className="sticky-top">
                <ul data-te-nav-list-ref className="menu menu-horizontal px-1">
                  <li>
                    <a
                      data-te-nav-link-ref
                      data-te-nav-link-active
                      href="#hero"
                    >
                      Início
                    </a>
                  </li>
                  <li>
                    <a
                      data-te-nav-link-ref
                      data-te-nav-link-active
                      href="#nossospilares"
                    >
                      Nossos Pilares
                    </a>
                  </li>
                  <li>
                    <a
                      data-te-nav-link-ref
                      data-te-nav-link-active
                      href="#porqueinvestir"
                    >
                      Por que Investir?
                    </a>
                  </li>
                  <li>
                    <a
                      data-te-nav-link-ref
                      data-te-nav-link-active
                      href="#diversificararenda"
                    >
                      Plano Diversificar a Renda
                    </a>
                  </li>
                  <li>
                    <a
                      data-te-nav-link-ref
                      data-te-nav-link-active
                      href="#nossosparceiros"
                    >
                      Nossos Parceiros
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-end">
              <a
                className="btn btn-success btn-circle h-12 w-12"
                href="https://api.whatsapp.com/send?phone=5511913541327&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20uma%20Mesa%20Proprietária%20Americana.%20Podemos%20conversar%3F%20"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <WhatsappLogo size={32} color="#f2f2f2" weight="fill" />
              </a>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  )
}
