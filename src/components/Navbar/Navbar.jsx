import { useState } from 'react';
import IconMenuMobile from '../IconMenuMobile/IconMenuMobile';
import './Navbar.css';

function Navbar() {
    const [drop, setDrop] = useState('hidden');
    const dropmove = () => {
        if (drop === 'hidden') {
            setDrop('');
        } else {
            setDrop('hidden');
        }
    };

    return (
        <nav className="border shadow-md fixed top-0 w-full bg-white">
            <div className='container mx-auto grid grid-cols-2 p-3 items-center lg:flex'>
                <div className='text-5xl col-span-1'>
                    LOGO
                </div>

                <div className='col-span-1 flex justify-end lg:hidden'>
                    <div onClick={() => dropmove()}>
                        <IconMenuMobile />
                    </div>
                </div>

                <div className={`pt-5 col-span-2 ${drop} transition duration-200 lg:flex lg:pt-0 lg:pl-20`}>
                    <div className='flex flex-col gap-5 lg:flex-row'>
                        <div className='flex justify-center border rounded-md border-black p-1 hover:bg-black hover:text-white cursor-pointer transition duration-150 lg:px-5 lg:py-2'>
                            Menu
                        </div>
                        <div className='flex justify-center border rounded-md border-black p-1 hover:bg-black hover:text-white cursor-pointer transition duration-150 lg:px-5 lg:py-2'>
                            Menu
                        </div>
                        <div className='flex justify-center border rounded-md border-black p-1 hover:bg-black hover:text-white cursor-pointer transition duration-150 lg:px-5 lg:py-2'>
                            Menu
                        </div>
                        <div className='border-t border-black lg:border-l'></div>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='flex justify-center border rounded-md bg-black text-white border-black p-1 hover:bg-white hover:text-black cursor-pointer transition duration-150 lg:px-5 lg:py-2'>
                                Login
                            </div>
                            <div className='flex justify-center border rounded-md bg-black text-white border-black p-1 hover:bg-white hover:text-black cursor-pointer transition duration-150 lg:px-5 lg:py-2'>
                                Registry
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;