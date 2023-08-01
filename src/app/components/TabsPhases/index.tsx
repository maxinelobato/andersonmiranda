"use client";

import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TabsPhases() {
  const iconstabsphases = {
    iconorange: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="h-5 w-5 text-orange-500"
      >
        <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
      </svg>
    ),
  };

  return (
    <div className="origin-center w-full max-w-md px-2 pt-12 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex drop-shadow-2xl space-x-1 rounded-xl bg-black/30 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2 text-xs font-medium leading-5 text-orange-500",
                "focus:outline-none focus:ring-1 focus:ring-orange-500",
                selected
                  ? "bg-black shadow-md shadow-orange-500"
                  : "text-orange-500 hover:text-white hover:bg-black"
              )
            }
          >
            1ª Fase Desafiante
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2 text-xs font-medium leading-5 text-orange-500",
                "focus:outline-none focus:ring-1 focus:ring-orange-500",
                selected
                  ? "bg-black shadow-md shadow-orange-500"
                  : "text-orange-500 hover:text-white hover:bg-black"
              )
            }
          >
            2ª Fase de Verificação
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2 text-xs font-medium leading-5 text-orange-500",
                "focus:outline-none focus:ring-1 focus:ring-orange-500",
                selected
                  ? "bg-black shadow-md shadow-orange-500"
                  : "text-orange-500 hover:text-white hover:bg-black"
              )
            }
          >
            3ª Fase dos Lucros
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className={classNames("rounded-xl bg-black/30 p-3")}>
            {/* <ul>
              <li className="relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">
                  O especialista precisa fazer 8% da conta, ou seja, em uma
                  conta de $100k por exemplo é o equivalente a $8 mil dólares.
                </h3>
              </li>
            </ul> */}
            <ul className=" p-3 space-y-2">
              <li className="flex items-center gap-1">
                {iconstabsphases.iconorange}
                <span className="text-sm font-medium leading-5">
                  Atingir 8% da conta
                </span>
              </li>
            </ul>
          </Tab.Panel>
          <Tab.Panel className={classNames("rounded-xl bg-black/30 p-3")}>
            {/* <ul>
              <li className="relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">
                  O especialista precisa fazer 5% da conta, ou seja, em uma
                  conta de $100k por exemplo é o equivalente a $5 mil dólares.
                </h3>
              </li>
            </ul> */}
            <ul className=" p-3 space-y-2">
              <li className="flex items-center gap-1">
                {iconstabsphases.iconorange}
                <span className="text-sm font-medium leading-5">
                  Atingir 5% da conta
                </span>
              </li>
            </ul>
          </Tab.Panel>
          <Tab.Panel className={classNames("rounded-xl bg-black/30 p-3")}>
            {/* <ul>
              <li className="relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">
                  Parabéns! Agora você já tem uma Conta Real, após o
                  especialista totalizar os 13%, por exemplo, em uma conta de
                  $100k é o equivalente a $13 mil dólares, a conta será zerada
                  para iniciar agora em Conta Real e você irá assinar um
                  contrato de adesão conosco para a divisão dos lucros em 50%
                  para você e 50% para o especialista.
                </h3>
              </li>
            </ul> */}
            <ul className=" p-3 space-y-2">
              <li className="flex items-center gap-1">
                {iconstabsphases.iconorange}
                <span className="text-sm font-medium leading-5">
                  Totalizando 13% da conta
                </span>
              </li>
              <li className="flex items-center gap-1">
                {iconstabsphases.iconorange}
                <span className="text-sm font-medium leading-5">
                  Irá iniciar em Conta Real
                </span>
              </li>
              <li className="flex items-center gap-1">
                {iconstabsphases.iconorange}
                <span className="text-sm font-medium leading-5">
                  Primeiro saque em 30 dias
                </span>
              </li>
              <li className="flex items-center gap-1">
                {iconstabsphases.iconorange}
                <span className="text-sm font-medium leading-5">
                  Segundo saque em diante em 15 em 15 dias
                </span>
              </li>
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
