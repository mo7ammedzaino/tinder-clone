import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./index.css";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import { postsRef } from "../../firebase";

const TinderCards = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const q = query(postsRef);

    const unsubscribe = onSnapshot(
      q,
      orderBy("timestamp", "desc"),
      (snapshot) => {
        const updatedRooms = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPeople(updatedRooms);
      }
    );

    return () => {
      // Cleanup the subscription when the component unmounts
      unsubscribe();
    };
  }, [people]);

  return (
    <section className="tinder">
      <div className="tinderCards">
        {people.map((person) => (
          <TinderCard
            key={person.id}
            className="swipe"
            prventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3 className="card__heading">{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </section>
  );
};

export default TinderCards;
