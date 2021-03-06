import React, { useState } from 'react'


import {ReactComponent as Logo} from '../../assets/logo.svg'
import ASC from '../../assets/asc.png'

import WalletData from '../wallet-data';
import ListWallet from '../list-wallet';
import WalletMobil from '../wallet-mobil'

import { useTranslation } from "react-i18next"

const Navlik = () => {

    const [t, i18next] = useTranslation("navilink")

    let [open,setOpen]=useState(false);

    return (
        <div className="flex items-center justify-between py-4 md:px-10 px-7">
            <div className='flex items-center' >
                <a href=""><Logo className=" w-16 inline-flex"/></a>
                <img src={ASC} alt="" className='hidden p-1 h-12 inline-flex md:block' />
            </div>
            <div className='hidden md:my-0 my-7 md:block'>
                <button 
                className='font-fut font-medium text-xl text-ascBlue hover:text-ascBlueLight'
                onClick={() => i18next.changeLanguage("en")} >
                    EN
                </button>
                <span> / </span>
                <button
                className='font-fut font-medium text-xl text-ascBlue hover:text-ascBlueLight'
                onClick={() => i18next.changeLanguage("es")}>
                    ES
                </button>
            </div >
            <div className="absolute left-1/2 ">
                <WalletMobil/>
            </div>
            <div onClick={()=>setOpen(!open)} className='text-3xl  cursor-pointer md:hidden text-ascBlue'>
            <ion-icon name='menu-sharp' ></ion-icon>  
            </div>
            <ul onClick={()=>setOpen(!open)} className={`md:pb-0 pb-12 absolute top-0 inset-y-0 right-0 md:items-center md:static backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 md:border-0 md:z-auto z-[1] w-full h-full md:w-auto md:pl-0 pl-9 transition-all delay-150 ease-in-out duration-100 ${open ? 'visible':'invisible'}`}>
                <li onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-ascBlue'>
                <ion-icon name={open ? 'close':'menu-sharp'} ></ion-icon>
                </li>
                <li className='md:hidden text-x1 mt-12 pr-7 pt-9  font-fut font-semibold text-ascBlue text-right hover:text-ascBlueLight'>
                    <a href='https://www.awkwardskeleton.com/'>{t("navilink.home")}</a>
                </li>
                <li className='md:hidden text-x1 mt-12 pr-7 pt-9  font-fut font-semibold text-ascBlue text-right hover:text-ascBlueLight'>
                    <a href='https://discord.gg/GmZej7Qy'>{t("navilink.discord")}</a>
                </li>
                <li className='md:hidden text-x1 mt-12 pr-7 pt-9 text-right'>
                    <button className='md:hidden font-fut font-semibold text-ascBlue hover:text-ascBlueLight'
                    onClick={() => i18next.changeLanguage("es")}>{t("navilink.esp")}
                    </button>
                </li>
                <li className='md:hidden text-x1 mt-12 pr-7 pt-9 text-right'>
                    <button 
                    className='md:hidden font-fut font-semibold text-ascBlue hover:text-ascBlueLight'
                    onClick={() => i18next.changeLanguage("en")}>
                        {t("navilink.eng")}
                    </button>
                </li>
                
                <li className='grid place-content-end mt-12 pr-7 pt-9'>
                   <ListWallet />
                </li> 
            </ul>
            <WalletData />
        </div>
    );
  }
  
  export default Navlik;