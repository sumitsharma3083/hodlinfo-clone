import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-inverse bg-inverse navbar-expand-lg navbar-transparent container pt-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span style={{color : "#3AB9B5", fontSize : "2rem"}}>HODLINFO</span><span style={{color : "#fff", fontSize : "1rem"}}>.com</span></a>
                    <p style={{position: "relative", top :"40px" , right: "210px" , textTransform:"capitalize", color:"#3e4457", fontSize:"1rem"}}>powered by <span style={{color: "#3AB9B5"}}>finstreet</span></p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-solid fa-bars" style={{color : "#fff"}}></i>
                    </button>
                    <div class="collapse navbar-collapse"></div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           
                            <li className="nav-item dropdown" style={{backgroundColor : "#2e3241" , borderRadius : "10px"}}>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" style={{color : "#fff"}} aria-expanded="false">
                                    INR
                                </a>

                            </li>
                            <li className="nav-item dropdown mx-3" style={{backgroundColor : "#2e3241" , borderRadius : "10px"}}>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" style={{color : "#fff"}} aria-expanded="false">
                                    BTC
                                </a>

                            </li>
                           

                        </ul>
                       
                            <p className="m-3" style={{ border: "2px solid #3AB9B5", padding: "5px", borderRadius: "50%" , color:"#3AB9B5", fontWeight:"bolder" }}>58</p>
                            <button className='btn' style={{backgroundColor :"#3AB9B5" , color:"#fff"}}><i class="fa fa-brands fa-telegram mx-2"></i>Connect Telegram</button>
                            <div className="form-check form-switch m-3" >
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked style={{backgroundColor:"#2e3241"}} />

                            </div>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar