import React, { useState } from 'react'


import {ReactComponent as Logo} from '../../assets/logo.svg'
import ASC from '../../assets/asc.png'

import Button from '../wallet-data';



const Navlik = () => {

    let Links = [
        {name: 'Home', link:'https://www.awkwardskeleton.com/'},
        {name: 'Discord', link:'https://discord.gg/GmZej7Qy'},
        {name: 'Español', link:'/'},
        {name: 'English', link:'/'},
        {name: 'Connect Wallet', link:''}
    ]

    let [open,setOpen]=useState(false);

    return (
        <div class="flex items-center justify-between py-4 md:px-10 px-7">
            <div class='flex items-center' >
                <a href=""><Logo class=" w-16 inline-flex"/></a>
                <img src={ASC} alt="" class='hidden p-1 h-12 inline-flex md:block' />
            </div>
            <div class='hidden md:my-0 my-7 md:block'>
                <a href="EN">EN</a>
                <span> / </span> 
                <a href="ES">ES</a>    
            </div >
            <Button class='md:my-0 my-7'></Button>
            <div onClick={()=>setOpen(!open)} class='text-3xl  cursor-pointer md:hidden text-ascBlue'>
                <ion-icon name='menu-sharp' ></ion-icon>  
                </div>
                <ul class={`md:pb-0 pb-12 absolute -top-0 inset-y-0 right-0 md:items-center md:static backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 md:border-0 md:z-auto z-[1] w-3/4 h-full md:w-auto md:pl-0 pl-9 transition-all delay-150 ease-in-out duration-100 ${open ? 'visible':'invisible'}`}>
                    <li onClick={()=>setOpen(!open)} class='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-ascBlue'>
                    <ion-icon name={open ? 'close':'menu-sharp'} ></ion-icon>
                    </li>
        
                    { 
                    
                    Links.map((link)=>(
                        <li key={link.name} class='md:hidden text-x1 my-7 font-fut pr-7 pt-11 font-semibold text-ascBlue text-right'>
                            <a href={link.link} class=''>{link.name}</a>
                        </li>
                    ))
                }
                </ul>
        </div>
    );
  }
  
  export default Navlik;