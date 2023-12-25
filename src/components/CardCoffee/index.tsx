import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react"
import { useCoffee } from "../../hook/CoffeeContext"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

export function CoffeeCard() {
  const { coffeeList, addToCart } = useCoffee()
  const [amountItems, setAmountItens] = useState<{ [key: string]: number }>({})

  function incrementAmount(coffeeId: string) {
    const currentAmount = amountItems[coffeeId] || 0

    if (currentAmount < 10) {
      setAmountItens((prevAmountItems) => ({
        ...prevAmountItems,
        [coffeeId]: currentAmount + 1,
      }))
    } else {
      toast.error("Você não pode adicionar mais de 10 cafés.", {
        style: {
          boxShadow: "none",
          border: "1px solid #ccc",
        },
      })
    }
  }

  function decrementAmount(coffeeId: string) {
    setAmountItens((prevAmountItems) => ({
      ...prevAmountItems,
      [coffeeId]: Math.max((prevAmountItems[coffeeId] || 0) - 1, 0),
    }))
  }

  return (
    <>
      {coffeeList.map((coffee) => {
        const coffeeId = coffee.id

        return (
          <div
            className="bg-base-card w-[256px] h-[310px] rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] flex flex-col items-center justify-center p-5 mt-14 relative"
            key={coffee.id}
          >
            <div>
              <Toaster />
            </div>

            <div className="relative -top-10 flex items-center flex-col gap-4">
              <img src={coffee.image} alt={`Foto do café ${coffee.name}`} />

              <div className="flex gap-2">
                {coffee.type.map((type, index) => (
                  <p
                    key={index}
                    className="text-yellow-dark bg-yellow-light inline-flex py-1 px-2 rounded-full text-[10px] uppercase font-bold"
                  >
                    {type}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-center flex-col gap-2 -mt-4">
              <h2 className="text-xl font-bold text-base-subtitle ">
                {coffee.name}
              </h2>
              <p className="text-base-label text-[14px] font-normal text-center">
                O tradicional café feito com água quente e grãos moídos
              </p>
            </div>

            <div className="flex items-center justify-between gap-6 mt-6">
              <div>
                <p className="text-base-text">
                  R${" "}
                  <span className="font-extrabold text-2xl">
                    {coffee.price}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-base-button rounded-md inline-flex p-2 gap-2">
                  <button onClick={() => decrementAmount(coffeeId)}>
                    <Minus size={14} className="text-purple" />
                  </button>
                  <p>{amountItems[coffeeId] || 0}</p>
                  <button onClick={() => incrementAmount(coffeeId)}>
                    <Plus size={14} className="text-purple" />
                  </button>
                </div>
                <button
                  className="bg-purple p-2 rounded-md hover:bg-purple/90 transition-all duration-100"
                  onClick={() => {
                    addToCart(coffeeId)
                    toast.success("Café adicionado ao carrinho!", {
                      style: {
                        boxShadow: "none",
                        border: "1px solid #ccc",
                        padding: "1rem",
                      },
                    })
                  }}
                >
                  <ShoppingCartSimple size={22} color="#F3F2F2" weight="fill" />
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
