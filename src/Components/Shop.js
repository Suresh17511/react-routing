import '../App.css';
import StarIcon from '@material-ui/icons/Star';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import {Link} from 'react-router-dom';

import React, {useState, useEffect} from 'react';

function Shop() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    const data = await fetch(
      'https://fortnite-api.theapinetwork.com/upcoming/get'
    );
    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  };
  return (
    <div className="ShopPage">
      <h2>Shop page</h2>
      <div className="items-div">
        {items.map((item) => (
          <div className="items">
            <img src={item.item.images.icon} alt="" />
            <p key={item.itemId}>
              <Link to={`/shop/${item.itemId}`} className="itemDetails">
                {item.item.name}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
