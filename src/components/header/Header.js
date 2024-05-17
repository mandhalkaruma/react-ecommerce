import React from 'react';
import '../header/Header.css';
import Logo from '../../assets/images/logo.svg';

const Header = () => {
    return (
        <>
            <header>
                <div className='container-fluid'>
                    <div className="row">
                        <div className='col-sm-2'>
                            <img src={Logo} alt="" style={{width:"110px",height:"40px"}}/>
                        </div>

                        <div className='col-sm-5'>
                            <div className='headerSearch d-flex align-items-center' >
                                <div className='selecrDrop cursor' style={{fontSize:"10px"}}>
                                    All Categories
                                </div>

                                <div className='search' >
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;