import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "@phosphor-icons/react"
import { Input } from "../../components/Input"

import line from "../../assets/line.svg"

export function Checkout() {
  return (
    <div className="flex justify-between gap-8 mt-[72px]">
      <div className="w-full">
        <p className="text-base-subtitle text-lg font-bold">
          Complete seu pedido
        </p>

        <div className="bg-base-card rounded-md p-10 mt-4">
          <div>
            <div className="flex items gap-2">
              <MapPinLine size={22} className="text-yellow-dark" />
              <div>
                <p className="text-base-subtitle">Endereço da Entrega</p>
                <p className="text-base-text text-sm">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </div>

            <form className="mt-8 flex flex-col gap-4">
              <Input
                type="text"
                placeholder="Cep"
                className="placeholder:uppercase w-[200px]"
              />
              <Input type="text" placeholder="Rua" />

              <div className="flex items-center gap-4">
                <Input type="text" placeholder="Número" />
                <Input type="text" placeholder="Complemento" />
              </div>

              <div className="flex items-center gap-4">
                <Input type="text" placeholder="Bairro" />
                <Input type="text" placeholder="Cidade" />
                <Input type="text" placeholder="UF" />
              </div>
            </form>
          </div>
        </div>

        <div className="bg-base-card rounded-md p-10 mt-4">
          <div>
            <div className="flex items gap-2">
              <CurrencyDollar size={22} className="text-purple" />
              <div>
                <p className="text-base-subtitle">Pagamento</p>
                <p className="text-base-text text-sm">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <button className="flex items-center gap-3 bg-base-button border rounded-md p-4 hover:border-purple transition-all duration-75 uppercase  text-xs">
                <CreditCard size={16} className="text-purple" />
                <span>Cartão de Crédito</span>
              </button>

              <button className="flex items-center gap-3 bg-base-button border rounded-md p-4 hover:border-purple transition-all duration-75 uppercase  text-xs">
                <Bank size={16} className="text-purple" />
                <span>Cartão de Débito</span>
              </button>

              <button className="flex items-center gap-3 bg-base-button border rounded-md p-4 hover:border-purple transition-all duration-75 uppercase  text-xs">
                <Money size={16} className="text-purple" />
                <span>Cartão de Crédito</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[600px]">
        <p className="text-base-subtitle text-lg font-bold">
          Cafés selecionados
        </p>

        <div className="bg-base-card rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] p-10 mt-4">
          <div>
            <div className="flex justify-between">
              <div className="flex items-center justify-between gap-5">
                <img
                  src="https://i.imgur.com/GesgK2k.png"
                  alt=""
                  className="w-16 h-16"
                />
                <div>
                  <p className="text-base-subtitle">Expresso Tradicional</p>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="bg-base-button rounded-md inline-flex p-2 gap-2">
                      <button>
                        <Minus size={14} className="text-purple" />
                      </button>
                      <p>1</p>
                      <button>
                        <Plus size={14} className="text-purple" />
                      </button>
                    </div>

                    <div className="bg-base-button rounded-md inline-flex p-3 gap-2">
                      <button className="inline-flex items-center uppercase text-xs text-base-text gap-2">
                        <Trash size={16} className="text-purple" />
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-extrabold text-base-text">
                R$ <span>9,90</span>
              </p>
            </div>
          </div>

          <div>
            <img src={line} alt="" className="mt-6 mb-6" />

            <div className="flex items-center justify-between text-base-text mb-4">
              <p>Total de itens</p>
              <p>
                R$ <span>9,90</span>
              </p>
            </div>

            <div className="flex items-center justify-between text-base-text mb-4">
              <p>Entrega</p>
              <p>
                R$ <span>3,90</span>
              </p>
            </div>

            <div className="flex items-center justify-between text-base-text font-bold text-xl mb-4">
              <p>Total</p>
              <p>
                R$ <span>39,90</span>
              </p>
            </div>
          </div>

          <div className="relative">
            <button className="w-full px-2 py-3 bg-yellow rounded-md text-white uppercase font-bold mt-6 ">
              Confirmar pedido
            </button>
            <div className="relative flex h-4 w-4 left-[335px] -top-[55px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple opacity-75"></span>
              <span className="absolute inline-flex rounded-full h-4 w-4 bg-purple-dark"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
