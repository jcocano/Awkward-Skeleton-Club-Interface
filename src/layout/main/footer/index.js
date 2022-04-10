import { useTranslation } from "react-i18next"

import {ReactComponent as Discord} from '../../assets/social/discord.svg'
import {ReactComponent as Twitter} from '../../assets/social/twitter.svg'
import {ReactComponent as OpenSea} from '../../assets/social/opensea.svg'
import {ReactComponent as Instagram} from '../../assets/social/instagram.svg'


function Footer() {

    const [t] = useTranslation("footer")


    return (
        <footer className="flex.col h-12 bg-ascYellow fixed inset-x-0 bottom-0">
            <div className="flex justify-around items-center pt-2">
                <a href="https://discord.com/invite/KGaFHC29mC"> <Discord className='w-4 h-4'/></a>
                <a href="https://twitter.com/SkeletonAwkward"> <Twitter fill='#253b57' className='w-4 h-4'/></a>
                <a href="https://www.instagram.com/awkwardskeletonclub/"> <OpenSea className='w-4 h-4'/></a>
                <a href="https://opensea.io/block3-labs?tab=created_collections"> <Instagram fill='#253b57' className='w-4 h-4'/></a>
            </div>
            <div className="items-center">
                <p className="text-sm font-fut font-medium text-ascBlue text-center" >{t("footer.copyright")}</p>
            </div>
        </footer>
    );
  }
  
  export default Footer;