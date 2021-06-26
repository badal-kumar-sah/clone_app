import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people] = useState([
    {
      name: "Elon Musk",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
    },
    {
      name: "Bella Hadid",
      url: "https://media.allure.com/photos/5dd03c30c4bab0000867ff80/16:9/w_2560%2Cc_limit/bella-hadid-social.jpg",
    },
    {
      name: "Kylie Jenner",
      url: "https://media.allure.com/photos/5f132d0fba35d0000994ca4d/16:9/w_2560%2Cc_limit/kylie-nails-lede.jpg",
    },
    {
      name: "Kendall Jenner",
      url: "https://media.allure.com/photos/5df8fe999487e100088f210d/3:4/w_1737,h_2316,c_limit/kendall%20jenner.jpg",
    },
  ]);

  const onSwipe = (direction, character) => {
    console.log(`You ${direction} swiped ${character}`);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => onSwipe(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
