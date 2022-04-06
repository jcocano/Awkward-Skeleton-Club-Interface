import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";

import { connector } from "../../../config/web3";
import { useCallback, useEffect, useState } from "react";
import useTruncatedAddress from "../../../hooks/useTruncatedAddress"


const ListWallet = () => {
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
        <div className='flex'>
            { active ? (
                <div className='flex font-fut font-semibold text-ascBlue'>
                    <div className='mr-2'>
                        <p>{truncatedAddress}</p>
                    </div>
                    <div>
                        <p>- {balance} Ξ</p>
                    </div>
                    <button onClick={disconnect}><ion-icon className='mt-1 ml-2' color='white' name="close" ></ion-icon></button>
                </div>
            ) : (
                <button
                disabled={isUnsupportedChain}
                className="font-fut font-semibold text-ascBlue"
                onClick={connect}>
                 {isUnsupportedChain ? "Change Network" : "Connect Wallet"}
        </button>
            )}
        </div>
    )
}

export default ListWallet;