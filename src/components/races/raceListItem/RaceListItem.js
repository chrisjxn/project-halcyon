import React from 'react';
import { Link } from 'react-router-dom';
import './RaceListItem.css';

export default function RaceListItem(props) {
    return (
        <div className="raceListItemComponent">
            <Link to={`/races/${props.race.num}`} className="raceLink">
                <div className="container">
                    <div className="left">
                        <img className="flag" src={require(`../../../assets/flags/${props.race.flag_url}`)} alt="Flag of host country" />
                        <div className="raceAbbrev">{props.race.abbrev}</div>
                    </div>
                    <div className="center">
                        <div className="circuit">{props.race.circuit}</div></div>
                    <div className="right">
                        <div className="winnerAbbrev">{props.race.winner_abbrev}</div>
                        <img className="mfgLogo" src={require(`../../../assets/logos/${props.race.mfg_logo_url}`)} alt="Logo of winning manufacturer" />
                    </div>
                </div>
            </Link>
        </div>
    )
}