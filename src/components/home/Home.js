import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../../assets/motogp.svg';

export default function Home() {
    return (
        <div className="homeComponent">
            <h1 className="jpnWelcome">ようこそ</h1>
            <h1 className="deuWelcome">willkommen</h1>
            <h1 className="itaWelcome">benvenuto</h1>
            <h1 className="engWelcome">welcome</h1>
            <img className="logo" src={logo} alt='MotoGP logo' />
            <Link className="racesLink" to='/races'>2017 Season Summary</Link>
        </div>
    )
}