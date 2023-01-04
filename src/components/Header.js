import React from "react";
import './Header.css'
import IconHome from "./icon/HomeLogo";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="header_1">
                <span>
                    <Link to='/' style={{
                        textDecoration: 'none',
                        color: '#550D0E'
                    }}>
                        <IconHome />
                    </Link>
                </span>
                <span>
                    <Link to='/Contact' style={{
                        textDecoration: 'none',
                        color: '#550D0E'
                    }}>
                        Contact
                    </Link>
                </span>
                <span>
                    <Link to='/Help' style={{
                        textDecoration: 'none',
                        color: '#550D0E'
                    }}>
                        Help
                    </Link>
                </span>
            </div>
            <div className="header_2">
                <span >
                    <Link to='/Whislist' style={{
                        textDecoration: 'none',
                        color: '#550D0E'
                    }}>
                        Whislist
                    </Link>
                </span>
                <span>
                    <Link to='/MyOrder' style={{
                        textDecoration: 'none',
                        color: '#550D0E'
                    }}>
                        MyOrders
                    </Link>
                </span>
                <span>
                    <Link to='/SignUp' style={{
                        textDecoration: 'none',
                        color: '#550D0E',
                    }}>
                        Sign 
                    </Link>
                </span>
            </div>
        </header>
    )
}
export default Header;

