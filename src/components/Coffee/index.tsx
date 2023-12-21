import { CoffeeCard } from "../CardCoffee"

export function Coffee() {
  return (
    <div className="mt-[140px]">
      <h3 className="text-3xl font-extrabold text-base-subtitle">
        Nossos cafés
      </h3>

      <div className="flex flex-wrap gap-6 items-center justify-center mb-8">
        <CoffeeCard />
      </div>
    </div>
  )
}
