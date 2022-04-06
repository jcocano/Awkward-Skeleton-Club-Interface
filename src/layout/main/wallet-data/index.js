import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";

import { connector } from "../../../config/web3";
import { useCallback, useEffect, useState } from "react";
import useTruncatedAddress from "../../../hooks/useTruncatedAddress"


const WalletData = () => {
    const [balance, setBalance] = useState(0);
    const { active, activate, deactivate, account, error, library } =
      useWeb3React();
  
    const isUnsupportedChain = error instanceof UnsupportedChainIdError;
  
    const connect = useCallback(() => {
      activate(connector);
      localStorage.setItem("previouslyConnected", "true");
    }, [activate]);
  
    const disconnect = () => {
      deactivate();
      localStorage.removeItem("previouslyConnected");
    };
  
    const getBalance = useCallback(async () => {
      const toSet = await library.eth.getBalance(account);
      setBalance((toSet / 1e18).toFixed(2));
    }, [library?.eth, account]);
  
    useEffect(() => {
      if (active) getBalance();
    }, [active, getBalance]);
  
    useEffect(() => {
      if (localStorage.getItem("previouslyConnected") === "true") connect();
    }, [connect]);
  
    const truncatedAddress = useTruncatedAddress(account);

    return (
        <div className='hidden flex md:block'>
            { active ? (
                <div className='flex md:bg-ascBlueLight md:text-white font-fut-300 md:py-2 md:px-2 md:h-12 md:items-center md:rounded md:ml-8 duration-500'>
                    <div className='mr-2'>
                        <p>{truncatedAddress}</p>
                    </div>
                    <div>
                        <p>~{balance} Ξ</p>
                    </div>
                    <button onClick={disconnect}><ion-icon className='mt-1 ml-2' color='white' name="close" ></ion-icon></button>
                </div>
            ) : (
                <button
                disabled={isUnsupportedChain}
                className="hidden md:block md:bg-ascBlue md:text-white font-fut-300 md:py-2 md:px-2 md:h-12 md:rounded md:ml-8 hover:bg-ascBlueLight duration-500"
                onClick={connect}>
                 {isUnsupportedChain ? "CHANGE NETWORK" : "CONECT WALLET"}
        </button>
            )}
        </div>
    )
}

export default WalletData;