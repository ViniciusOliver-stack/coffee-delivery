import { ShoppingCart, Timer, Package,Coffee } from "@phosphor-icons/react";
import { Benefits } from "../Benefits";
import banner from '../../assets/banner.svg'

export function Header() {
    return(
        <div className="mt-24 flex flex-col items-center justify-between lg:flex-row">
            <div className="max-w-[620px]">
                <div className="flex flex-col gap-4">                
                    <h2 className="text-5xl font-extrabold text-base-title">Encontre o café perfeito para qualquer hora do dia</h2>
                    <p className="text-xl font-normal text-base-subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-16">
                    <div className="flex flex-col gap-5">
                        <Benefits title="Compra simples e segura" icon={<ShoppingCart size={16} color="#fff" weight="fill" />} color="bg-yellow-dark"/>

                        <Benefits title="Compra simples e segura" icon={<Timer size={16} color="#fff" weight="fill" />} color="bg-yellow"/>
                    </div>

                    <div className="flex flex-col gap-5 mt-5 md:mt-0">
                        <Benefits title="Compra simples e segura" icon={<Package size={16} color="#fff" weight="fill" />} color="bg-base-text"/>

                        <Benefits title="Compra simples e segura" icon={<Coffee size={16} color="#fff" weight="fill" />} color="bg-purple"/>
                    </div>
                </div>

            </div>
            <div className="hidden md:block">
                <img src={banner} alt="" />
            </div>
        </div>
    )
}