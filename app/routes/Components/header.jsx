import React from 'react'
import logo from '../../../assets/images/logo.svg';
import { Link } from "@remix-run/react";
import bar from '../../../assets/images/bars.svg';
function Header() {

   
  return (
    <section>
    <header className='max-w-[1800px] w-[1800px] left-0 right-0 m-auto mx-auto fixed z-50' >
        <div className='flex pt-5  justify-between'>
            <Link to="/">
            <img src={logo} alt="" />
            </Link>

            <div>
            <Link to="/">
            <img src={bar} alt="" />
            </Link>

            </div>

            

        </div>
    </header>
    </section>
  )
}

export default Header