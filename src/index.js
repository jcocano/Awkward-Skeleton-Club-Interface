import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from './config/web3'

import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
//en
import banner_en from "./translations/en/banner.json"
import footer_en from "./translations/en/footer.json"
import main_en from "./translations/en/main.json"
import navilink_en from "./translations/en/navilink.json" 
import wallet_en from "./translations/en/wallet.json"
//es
import banner_es from "./translations/es/banner.json"
import footer_es from "./translations/es/footer.json"
import main_es from "./translations/es/main.json"
import navilink_es from "./translations/es/navilink.json" 
import wallet_es from "./translations/es/wallet.json"

i18next.init({
  interpolation: { escapeValue: false},
  lng: "en",
  resources:{
    en:{
      banner: banner_en,
      footer: footer_en,
      main: main_en,
      navilink: navilink_en,
      wallet: wallet_en
    },
    es:{
      banner: banner_es,
      footer: footer_es,
      main: main_es,
      navilink: navilink_es,
      wallet: wallet_es
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

