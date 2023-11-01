import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from 'js-cookie';


const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
    
  },
  {
    code: 'bn',
    name: 'বাংলা',
    country_code: 'in'
    
  },
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr'
    
  },
  {
    code: 'ar',
    name: 'عربي',
    country_code: 'sa',
    dir:"rtl"
    
  },
 
]

const GlobeIcon = ({width = 26, height = 26}) => (
<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" className="bi bi-globe-central-south-asia" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.721.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z"/>
</svg>
)



function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find(lang => lang.code === currentLanguageCode);
  const { t } = useTranslation();

  const releaseDate = new Date("2023-11-01");
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  useEffect(()=> {
document.body.dir = currentLanguage.dir || 'ltr';
document.title = t('app_title');
  }, [currentLanguage, t])
  return (
   <>
    <div className="container">
  <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
    <div className="container-fluid">
      <a className="navbar-brand font-weight-bold" href="#">EthicsWalaCoder</a>
    </div>
     {/* ---------------dropdown section ------------ */}
     <div className="d-flex justify-content-end ">
        <div className="dropdown">
          <button
            className="btn btn-link dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           <GlobeIcon/>
          </button>
          <ul className="dropdown-menu">
            <li>
              <span className="dropdown-item-text">
                  {t('language')}
              </span>
            </li>
            {languages.map(({code, name, country_code} )=> (
               <li key={country_code}>
               <button className="dropdown-item"onClick={()=> i18next.changeLanguage(code) }
               disabled={code === currentLanguageCode} >
                <span className={`fi fi-${country_code} mx-2`}
                style={{opacity: code === currentLanguageCode ? 0.5 : 1}}
                ></span>
              {name}
               </button>
             </li>
             
            ))}
           
          </ul>
        </div>
      </div>
      {/* ---------------dropdown section ------------ */}
  </nav>

     
      <div className="d-flex flex-column align-items-start container">
        <h1 className="font-weight-normal mb-3">{t("welcome_message")}</h1>
        <p>{t("days_since_release", { number_of_days :20 })}</p>
      </div>
      </div>
      </>
  );
}

export default App;
