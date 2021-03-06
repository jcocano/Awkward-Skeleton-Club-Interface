import Banner from "./banner";
import Navlik from "./nav-link";
import Footer from "./footer";

import Full from "../assets/Full.png"
import { useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';

import useAwkwardSkeletonClub from "../../hooks/useAwkwardSkeletonClub";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import tokens from '../../config/web3/whitelist/tokens.json'

import { useTranslation } from "react-i18next"



toast.configure()
const MainLayout = () => {
    const [t] = useTranslation("main")

    const [count, setCount] = useState(0);

    const [isPaused, setIsPaused] = useState();
    const [salesPhase, setSalesPhase] = useState();
    const [isMinting, setIsMinting] = useState(false);

    const { active, account } = useWeb3React();

    const [proof, setProof] = useState()


    const asc = useAwkwardSkeletonClub();

    const getSalesPhase = useCallback(async() =>{
        if(asc){
            const resultSalesPhase = await asc.methods.salesPhase().call()
            setSalesPhase(resultSalesPhase);
        }
    }, [asc])

    useEffect(()=> {
        getSalesPhase()
    }, [getSalesPhase])

    const getIsPaused = useCallback(async() =>{
        if(asc){
            const resultPaused = await asc.methods.paused().call()
            setIsPaused(resultPaused);
        }
    }, [asc])

    useEffect(()=> {
        getIsPaused()
    }, [getIsPaused])

    const getProof = useCallback(() =>{
        let tab = [];
        tokens.map((token) =>{
        tab.push(token.addess);
        });

        const leaves = tab.map((address) => keccak256(address));
        const tree = new MerkleTree(leaves, keccak256, { sort: true });
        const root = tree.getHexRoot();
        const leaf = keccak256("0xe7b1d253b811Ca3a845e31F1124aEa502Bf73347");
        const proof = tree.getHexProof(leaf);
       
        const wladdres = keccak256(account);
        const hexProof = tree.getHexProof(wladdres);

        const verify = tree.verify(hexProof, wladdres, root)

        if (verify === false) {
            setProof(false)
        }else{
            setProof(hexProof)
        }
    },[account])

    useEffect(() =>{
        getProof()
    }, [getProof])
    
    const wlPrice = 2e+16; 
    const publicPrice = 3e+16;
    
    const wlMint = () => {
        setIsMinting(true);
        console.log("WL Mint")

        asc.methods.whiteListMint(count, proof).send({
            from: account,
            value: wlPrice * count,
            })
            .on('transactionHash', (txHash) => {
                toast.info(`???? TRANSACTION SENT ${txHash?.substr(0, 6)}...${txHash?.substr(-4)}`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
            .on('receipt', () =>{
                setIsMinting(false);
                toast.success('???? CONFIRMED TRANSACTION', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
            .on('error', (error) => {
                setIsMinting(false);
                toast.error(`??? FAILED TRANSACTION ${error.message} `,{
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
    }

    const pubMint = () =>{
        setIsMinting(true);
        console.log("normal mint")

        asc.methods.publicMint(count).send({
            from: account,
            value: publicPrice * count,
            })
            .on('transactionHash', (txHash) => {
                toast.info(`???? TRANSACTION SENT ${txHash?.substr(0, 6)}...${txHash?.substr(-4)}`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
            .on('receipt', () =>{
                setIsMinting(false);
                toast.success('???? CONFIRMED TRANSACTION', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
            .on('error', (error) => {
                setIsMinting(false);
                toast.error(`??? FAILED TRANSACTION ${error.message} `,{
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
        }

        const status = () => {
            if(isPaused === true){
                return <span className={`justify-self-center -ml-6 ease-in-out duration-100"}`}
                >
                    {t("main.paused")}
                </span>
            }
            if(!active){
                return <span className={`justify-self-center -ml-6 ease-in-out duration-100"}`}
                >
                    {t("main.no-active")}
                </span>
            }
            if(count=== 0){
                return <span className={`justify-self-center -ml-6 ease-in-out duration-100"}`}
                >
                    {t("main.count-0")}
                </span>
            }
            if(salesPhase === "0"){
                if(proof === false){
                    return <span className={`justify-self-center -ml-6 ease-in-out duration-10 "}`}
                    >
                        {t("main.no-whitelisted")}
                    </span>
                }
            }
            if(salesPhase === "1"){
                return <span className={`justify-self-center -ml-6 ease-in-out duration-100 ${isMinting ? "-ml-0" : "-ml-6 "}`}
                >
                    {t("main.mint-btn")}
                </span>
            }
            if(salesPhase === "2"){
                return <span className={`justify-self-center -ml-6 ease-in-out duration-100"}`}
                >
                    {t("main.sold-out")}
                </span>
            }
            else{
                return <span className={`justify-self-center -ml-6 ease-in-out duration-100 ${isMinting ? "-ml-0" : "-ml-6 "}`}
                >
                    {t("main.mint-btn")}
                </span>
            }
        }

    return (
        <div>
            <Banner />
            <Navlik />
            <div className="flex flex-col smm:flex-row-reverse align-center justify-center justify-items-center mt-3 xl:pt-5">
                <div className='flex flex-col justify-center justify-items-center'>
                <h1 className="text-center mb-2 font-fut text-ascBlue text-5xl md:text-6xl">{t("main.title")}</h1>
                <h3 className='text-center mb-3 font-fut text-ascBlue text-2xl font-extralight md:text-4xl'>{t("main.subtitle")}</h3>
                <div className='flex flex-row self-center h-10 w-2/6 md:w-44 rounded-lg relative bg-transparent mt-1' >
                    <button onClick={()=> setCount(count -1)} disabled={count === 0} className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none'>
                    <span className="m-auto text-2xl font-thin">???</span>
                    </button>
                    <input className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"  type="number" name="input-number" value={count}/>
                    <button onClick={()=> setCount(count +1)} disabled={count === 10} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                    <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                 </div>
                 <button className={`
                        self-center flex justify-center items-center bg-ascBlue text-white font-fut-300 mt-4 h-10 rounded hover:bg-ascBlueLight duration-500 w-48 sm:w-56 md:w-64 drop-shadow-xl 
                        ${count===0 ? 'bg-ascBlueLight':'bg-ascBlue'} ${count===0 ? 'drop-shadow-none':'drop-shadow-xl'} 
                        ${salesPhase==="2" ? 'bg-ascBlueLight':'bg-ascBlue'} ${salesPhase==="2" ? 'drop-shadow-none':'drop-shadow-xl'} 
                        ${!active ? 'bg-ascBlueLight':'bg-ascBlue'} ${!active ? 'drop-shadow-none':'drop-shadow-xl'} 
                        ${salesPhase==="0" && proof === false ? 'bg-ascBlueLight':'bg-ascBlue'} ${salesPhase==="0" && proof === false ? 'drop-shadow-none':'drop-shadow-xl'}
                        `} 
                        type="submit" 
                        onClick={salesPhase==="0" ? wlMint : pubMint} 
                        disabled={isPaused === true ||!active || count === 0 || salesPhase==="2" || salesPhase==="0" && proof === false} >
                    <svg class={`w-4 h-4 mr-3 text-white animate-spin justify-self-center ${isMinting ? 'visible':'invisible'}`}  fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        fill="currentColor">
                    </path>
                    </svg>
                    {status()}
                </button>
                </div>
                 <div className='flex justify-center justify-items-center'>
                    <img className='h-56 mt-5 md:h-96 md:mt-8 md:ml-10' src={Full} alt="" />
                 </div>
            </div>
            <Footer />
        </div> 
    );
  }
  
  export default MainLayout;