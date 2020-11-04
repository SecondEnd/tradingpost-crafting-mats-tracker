import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'underscore';
import './App.css';
import Mats from './Mats';

function App() {

  const [mats, setMats] = useState([]);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.guildwars2.com/v2/commerce/prices?ids=19697,19699,19703,19698,19702,19700,19701,19718,19739,19741,19743,19748,19745,19719,19728,19730,19731,19729,19732,19723,19726,19727,19724,19722,19725')
    .then(res => {
      setMats(res.data)
    }).catch(error => console.log(error))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    axios.get('https://api.guildwars2.com/v2/items?ids=19697,19699,19703,19698,19702,19700,19701,19718,19739,19741,19743,19748,19745,19719,19728,19730,19731,19729,19732,19723,19726,19727,19724,19722,19725')
    .then(res => {
      setItems(res.data)
    }).catch(error => console.log(error))
  }, [])

  const itemsInfo = _.map(items, (item) => {
    return _.extend(item, _.omit(_.findWhere(mats, {id: item.id}), 'id'));
  })

  const filteredMats = itemsInfo.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="mats-app">
      <div className="mats-search">
        <h1 className="mats-text">Search crafting materials</h1>
        <form>
          <input type="text" className="mats-searchbar" placeholder='Search' onChange={handleChange} />
        </form>
      </div>
      {filteredMats.map(item => {
        return (
          <Mats key={item.id} name={item.name} image={item.icon} buyPrice={item.buys.unit_price} sellPrice={item.sells.unit_price} />
        )
      })}
    </div>
  );
}

export default App;
