import { useState } from "react";

const Country = ({ count, sentCuntry }) => {
    const { name, flags,population,area, cca3,} = count;
    const [visite, setVisite] = useState(false);

    
    const VisitedHandeler = ()=>{
        setVisite(!visite);
        
    }
    // console.log(sentCuntry);
    return (
        <div  >
            <section className="">
                <div className="card flex bg-base-100 shadow-xl m-4 ">
                    <figure><img src={flags.png} alt="" /></figure>
                    <div className="card-body">
                        <h3>Name: {name?.common}</h3>
                        <p>Population :{population}</p>
                        <p>Area:{area}</p>
                        <p>Code : {cca3}</p>
                        
                    </div>
                    <div className="text-center ">
                    {visite && 'I Have Visited This Cuntory.'}
                    </div>
                    <button className="bg-red-200" onClick={()=>sentCuntry(count)}>Mark-UP</button>
                    <button onClick={VisitedHandeler}>{visite?'Visited':'Going'}</button>
                   
                </div>
            </section>
        </div>
    );
};

export default Country;