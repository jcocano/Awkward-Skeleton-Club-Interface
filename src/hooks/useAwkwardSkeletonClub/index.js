import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import AwkwardSkeletonClubArtifact from "../../config/web3/artifacts/AwkwardSkeletonClub";

const { address, abi } = AwkwardSkeletonClubArtifact;

const useAwkwardSkeletonClub = () => {
    const { active, library, chainId} = useWeb3React();

    const awkwardSkeletonClub = useMemo(() => {
        if (active) return new library.eth.Contract(abi, address[chainId]);
        }, [active, chainId, library?.eth?.Contract]);

    return awkwardSkeletonClub
}; 


export default useAwkwardSkeletonClub;