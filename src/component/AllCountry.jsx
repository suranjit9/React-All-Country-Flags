import { useEffect } from "react";
import { useState } from "react";
import Country from "./country";


const AllCountry = () => {
    const [countrys, setCuntrys] = useState([]);
    useEffect(() =>{
        fetch ('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCuntrys(data))
    },[])
    return (
        <div>
            <h3>Countrys :{countrys.length}</h3>
            {
              countrys.map(con => <Country key={con.cca3} count={con}></Country>)  
            }

        </div>
    );
};

export default AllCountry;