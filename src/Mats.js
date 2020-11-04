import React from 'react'
import gold_coin from './icons/gold_coin.png';
import silver_coin from './icons/silver_coin.png';
import copper_coin from './icons/copper_coin.png';
import './Mats.css'

const Mats = ({name, image, buyPrice, sellPrice}) => {

    const goldConverter = (amount) => {
        const gold = (amount / 10000)
        const silver = ((amount % 10000) / 100)
        const copper = ((amount % 10000) % 100)
        return (
            <div>
                <p>{~~gold} <img src={gold_coin} alt="G"/></p>
                <p>{~~silver} <img src={silver_coin} alt="S"/></p>
                <p>{~~copper} <img src={copper_coin} alt="C"/></p>
            </div>
        )
    }

    return (
        <div className="mats-container">
            <div className="mats-row">
                <div className="mats">
                    <img src={image} alt="Material"/>
                    <h1>{name}</h1>
                    <p className="mats-tier">1</p>
                </div>
                <div className="mats-data">
                    {goldConverter(buyPrice)}
                    {goldConverter(sellPrice)}
                </div>
            </div>
        </div>
    )
}

export default Mats
