import { useTranslation } from "react-i18next"

function Banner() {

    const [t] = useTranslation("banner")


    return (
        <div className="flex justify-center items-center h-14 bg-ascYellow drop-shadow-xl">
            <p className="font-fut font-semibold text-ascBlue text-center" >{t("banner.presale")}</p>
        </div>
    );
  }
  
  export default Banner;