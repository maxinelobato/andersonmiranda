"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TabsPhases() {
  let [categories] = useState({
    "1ª Fase Desafiante": [
      {
        id: 1,
        title:
          "O especialista precisa fazer 8% da conta, ou seja, em uma conta de $100k por exemplo é o equivalente a $8 mil dólares.",
      },
    ],
    "2ª Fase de Verificação": [
      {
        id: 1,
        title:
          "O especialista precisa fazer 5% da conta, ou seja, em uma conta de $100k por exemplo é o equivalente a $5 mil dólares.",
      },
    ],
    "3ª Fase dos Lucros": [
      {
        id: 1,
        title:
          "Parabéns! Agora você já tem uma Conta Real, após o especialista totalizar os 13%, por exemplo, em uma conta de $100k é o equivalente a $13 mil dólares, a conta será zerada para iniciar agora em Conta Real e você irá assinar um contrato de adesão conosco para a divisão dos lucros em 50% para você e 50% para o especialista.",
      },
    ],
  });

  return (
    <div className="origin-center w-full max-w-md px-2 pt-12 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex drop-shadow-2xl space-x-1 rounded-xl bg-black/30 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
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
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
             <Tab.Panel
             key={idx}
             className={classNames(
               'rounded-xl bg-black/30 p-3',
             )}
           >
              <ul>
                {posts.map((post) => (
                  <li key={post.id} className="relative rounded-md p-3">
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
