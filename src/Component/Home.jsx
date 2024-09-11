import React from "react";

const Home=()=>{

    return(

        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-around" style={{backgroundImage:"url(' https://themewagon.github.io/Cental/img/carousel-2.jpg')",height:'auto',backgroundRepeat:'no-repeat'}}>   
                    <div className="col-md-6 m-5" style={{backgroundColor:'#1F2E4E',borderRadius:'29px'}}>
                        <h4 className="text-center text-light mt-5">CONTINUE CAR RESERVATION</h4>
                        <form action="">
                            <div className="row">
                                <div className="col-md-12 rounded">
                                    <center>
                                    <select className="form-select m-3" style={{width:'80%'}} name="" id="">
                                        <option value="selected">Select Your Car type</option>
                                        <option value="1">VW Golf VII</option>
                                        <option value="2">Audi A1 S-Line</option>
                                    </select>
                                    </center>
                                </div>

                                <div className="col-md-12">
                                    <center>
                                        <input className="form-control" type="text" placeholder="Enter a city" style={{width:'80%'}} />
                                    </center>
                                </div>
                            </div>

                            <div className="row">
                                
                                <div className="col-md-12">
                                    <center>
                                        <h5 className="text-light mt-3" style={{width:'80%'}}>Need a different drop-off Location ?</h5>

                                        <input className="form-control rounded" style={{width:'80%'}} type="text" placeholder="Enter city or Airport" />

                                        <button className="btn btn-outline-danger bg-light text-danger form-control mt-5 mb-5" style={{width:'80%'}}>Book Now</button>
                                    </center>
                                </div>                                    
                                
                            </div>

                        </form>
                    </div>

                    <div className="col-md-4 m-5 text-light fw-bold" >
                        <h1 style={{fontSize:'70px'}}>Get 15% off your rental Plan your trip now</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;