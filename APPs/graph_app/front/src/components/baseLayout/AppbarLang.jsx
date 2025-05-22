import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { COUNTRIES_API_URL } from '../../constants/apiUrls';

const AppbarLang = () => {
   const DEFAULT_COUNTRY = 'South Korea';
   const [countries, setCountries] = useState([]);

   const fetchCountriesData = async () => {
      try {
         const response = await axios.get(COUNTRIES_API_URL);
         setCountries(response.data);
         const defaultCountry = response.data.find(
            (country) => country.name.common === DEFAULT_COUNTRY
         );

         if (defaultCountry) {
            let langKey = Object.keys(defaultCountry?.languages)[0];
            console.log(langKey);
         }
      } catch (error) {
         console.log('Error Fetching Data: ' + error);
      }
   };

   useEffect(() => {
      fetchCountriesData();
   }, []);

   return (
      <div className="relative w-30 h-10">
         <div className="drop-selected">Kor</div>
         <div className="drop-lists absolute">
            <div className="drop-list-wrapper max-h-52 overflow-y-scroll py-[6px] px-3">
               {countries?.length > 0 ? (
                  countries.map((country) => {
                     if (Object.keys(country?.languages)) {
                        const langKey = Object.keys(country?.languages)[0];

                        return (
                           <div
                              key={country.name.common}
                              className="drop-item flex items-center gap-3 py-1 px-0"
                           >
                              <span className="drop-img w-4 h-4 overflow-hidden rounded-full">
                                 <img
                                    src={country?.flags?.png}
                                    alt=""
                                    className="w-full h-full object-center"
                                 />
                              </span>
                              <span className="drop-text text-sm uppercase font-medium text-white">
                                 {langKey}
                              </span>
                           </div>
                        );
                     }
                  })
               ) : (
                  <p>No Data Listed</p>
               )}
            </div>
         </div>
      </div>
   );
};

export default AppbarLang;
