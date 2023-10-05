import { useEffect } from "react";
import { useState } from "react";
import Country from "./country";


const AllCountry = () => {
    const [countrys, setCuntrys] = useState([]);
    const [countryName, setCountryName] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCuntrys(data))
    }, [])
    const CountryNameFuntion = countr => {
        const showCuntry = [...countryName, countr];
        setCountryName(showCuntry);
    }
    return (

        <div >
            <h3 className="text-center text-4xl p-4">Countrys :{countrys.length}</h3>
            <h3 className="text-center text-xl p-4">Visited Countrys :{countryName.length}</h3>
            <div>
                {
                    countryName.map(country =>
                      
                            <div className="  bg-base-100 shadow-xl ">
                                <figure><img className="w-[100px] bg-base-100 shadow-xl" src={country.flags.png} alt="" /></figure>
                                
                                <h3 className="text-[10px]">{country.name?.common}</h3>
                               

                            </div>
                        )
                }
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    countrys.map(con => <Country
                        key={con.cca3}
                        sentCuntry={CountryNameFuntion}
                        count={con}>

                    </Country>)
                }

            </div>

        </div>
    );
};

export default AllCountry;