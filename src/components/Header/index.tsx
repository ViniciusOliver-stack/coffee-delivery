import logo from '../../assets/logo.svg'
import mapPin from '../../assets/mapPin.svg'
import shoppingCart from '../../assets/shopping-cart.svg'

export function Header() {
    return(
        <header className='flex items-center justify-between'>
            <img src={logo} alt="Coffee Delivery" />

            <div className='flex items-center gap-3'>
                <div className='bg-purple-light rounded-md inline-flex items-center gap-2 p-2'>
                <img src={mapPin} alt='Localização'/>
                <p className='text-purple-dark'>Poções, BA</p>
                </div>
                <div>
                    <button className='bg-yellow-light p-2 rounded-md'>
                        <img src={shoppingCart} alt="Carrinho de compra" />
                    </button>
                </div>
            </div>
        </header>
    )
}