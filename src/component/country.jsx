const Country = ({ count }) => {
    const { name, flags } = count;
    return (
        <div  >
            <section className="grid grid-cols-4">
                <div className="card w-96 bg-base-100 shadow-xl m-4 ">
                    <figure><img src={flags.png} alt="" /></figure>
                    <div className="card-body">
                        <h3>hello:</h3>
                        <h3>Name: {name?.common}</h3>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Country;