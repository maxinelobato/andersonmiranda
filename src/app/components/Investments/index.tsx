export default function Investments() {
  const featuresinvestments = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-10 w-10 text-orange-500"
        >
          <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm32-84H96V56a32,32,0,0,1,64,0Z"></path>
        </svg>
      ),
      title: "Segurança com o Mercado Americano",
      subtitle: "O mercado americano é um dos mais rígidos e seguros do mundo",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-10 w-10 text-orange-500"
        >
          <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      ),
      title: "Credibilidade Comunidade TraderX",
      subtitle:
        "Nossos especialistas são formados e certificados na maior comunidade de Traders no Mercado Financeiro do Brasil",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-10 w-10 text-orange-500"
        >
          <path d="M232,88.86V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16H152v24a8,8,0,0,0,11.58,7.16L192,216.94l28.42,14.22A8,8,0,0,0,232,224V167.14a55.87,55.87,0,0,0,0-78.28ZM128,144H72a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H72a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm88,99.06-20.42-10.22a8,8,0,0,0-7.16,0L168,211.06V178.59a55.94,55.94,0,0,0,48,0ZM192,168a40,40,0,1,1,40-40A40,40,0,0,1,192,168Z"></path>
        </svg>
      ),
      title: "Somos certificados FTMO e myForexFunds",
      subtitle:
        "Nossos especialistas tem certificação nas maiores corretoras do mundo",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-10 w-10 text-orange-500"
        >
          <path d="M231.79,187.33A80,80,0,0,0,169.57,72.59,80,80,0,1,0,24.21,139.33l-7.66,26.82a14,14,0,0,0,17.3,17.3l26.82-7.66a80.15,80.15,0,0,0,25.75,7.63,80,80,0,0,0,108.91,40.37l26.82,7.66a14,14,0,0,0,17.3-17.3Zm-16.26,1.34,7.55,26.41-26.41-7.55a8,8,0,0,0-6,.68,64.06,64.06,0,0,1-86.32-24.64A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.51,92.93A8,8,0,0,0,215.53,188.67Z"></path>
        </svg>
      ),
      title: "Atendimento Rápido",
      subtitle:
        "Temos uma equipe especialista no seu atendimento e para tirar todas as dúvidas que você tenha",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-10 w-10 text-orange-500"
        >
          <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,112H80v32H40Zm56,0H216v32H96ZM40,160H80v32H40Zm176,32H96V160H216v32Z"></path>
        </svg>
      ),
      title: "Planilhas Quinzenais",
      subtitle:
        "Saiba todo o progresso, transações operacionais e perdas da sua conta",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="h-10 w-10 text-orange-500"
        >
          <path d="M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM136,192H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64,24H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Z"></path>
        </svg>
      ),
      title: "Contrato de Adesão",
      subtitle:
        "Após a conclusão das fases de aprovação, você irá assinar um contrato para começar a receber os lucros de uma conta real",
    },
  ];

  return (
    <>
      <div className="bg-no-repeat bg-fixed bg-cover bg-[url(https://images.unsplash.com/photo-1533659124865-d6072dc035e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80)]">
        <div className="bg-gradient-to-b from-stone-950 via-black/60 to-stone-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="max-w-3xl mb-6 font-sans text-white text-2xl sm:text-5xl font-bold md:mx-auto">
                <span className="text-orange-500">Transparência</span> e{" "}
                <span className="text-orange-500">verdade</span> são os nossos
                pilares!
              </h1>
              <p className="text-center font-medium text-sm sm:text-base text-white md:mt-2 md:block">
                Nosso objetivo é ajudar as pessoas a entenderem a importância
                dos investimentos e como podem alcançar seus objetivos
                financeiros
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuresinvestments.map((item, idx) => (
                <div
                  key={idx}
                  className="block p-8 border-l-4 border-orange-400 group backdrop-blur-sm rounded-lg bg-white/5 shadow-lg shadow-orange-400/70"
                >
                  <div>
                    {item.icon}
                    <h2 className="mt-4 text-xl font-bold text-white">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-300">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
