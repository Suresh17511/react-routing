import './ItemDetails.css';
import StarIcon from '@material-ui/icons/Star';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import {Link} from 'react-router-dom';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import React, {useState, useEffect} from 'react';

function ItemDetails({match}) {
  const [item, setItem] = useState({
    item: {
      images: {},
      ratings: {},
    },
  });
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item.data);
    console.log(item);
  };
  return (
    <div className="itemDetails">
      <h2>Item Details</h2>
      <div className="itemContainer">
        <div className="detailBox">
          <div className="imgContainer">
            <img src={item.item.images.icon} alt="" />
          </div>
          <div className="specifications">
            <div className="ratings">
              <div className="starRating">
                <StarIcon className="starIcon" />
                <p>Star Rating : {item.item.ratings.avgStars}</p>
              </div>
              <div className="points">
                <EmojiEventsIcon className="pointsIcon" />
                <p>Total points : {item.item.ratings.totalPoints}</p>
              </div>
              <div className="votes">
                <EqualizerIcon className="votesIcon" />
                <p>Votes : {item.item.ratings.numberVotes}</p>
              </div>
            </div>
            <div className="contentDisc">
              <h2>{item.item.name}</h2>
              <p>{item.item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
