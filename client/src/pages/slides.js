import React, { useState, useMemo } from 'react';
import '../css/SwipePage.css';
import TinderCard from 'react-tinder-card';

import auth from '../services/auth.js';

//Almost all of this code is borrowed from Tinder Card code


const Simple = (props) => {
  const alreadyRemoved = []
  const buddies = []

  const db = props.db;

  let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete, character) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    // console.log(nameToDelete);
    console.log(character.props.id);
    if(direction === "left" || direction === "down") {//Status = false 
    //fetch call here to POST to table Swipe
    console.log(" FALSE FOR: " + auth.currentUser.id + " to " + character.props.id );

      fetch('/api/users/swiped', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         status: false,
         swiperId: auth.currentUser.id,
         swipeeId: character.props.id,
          
        }),
      })
        .then((res) => res.json())
        .catch((err) => err);
    }
    else if(direction === "right" || direction === "up") {//Status = true 
      //fetch call here to POST to table Swipe
      console.log(" TRUE FOR: " + auth.currentUser.id + " to " + character.props.id);
        fetch('/api/users/swiped', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
           status: true,
           swiperId: auth.currentUser.id,
           swipeeId: character.props.id,
            
          }),
        })
          .then((res) => res.json())
          .catch((err) => err);
      };

    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    // console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.props.id !== name)
    setCharacters(charactersState)
  }

  // const swipe = (dir) => {
  //   const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.props.id))
  //   if (cardsLeft.length) {
  //     const toBeRemoved = cardsLeft[cardsLeft.length - 1].props.id // Find the card object to be removed
  //     const index = db.map(person => person.props.id).indexOf(toBeRemoved) // Find the index of which to make the reference to
  //     alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
  //     childRefs[index].current.swipe(dir) // Swipe the card!
  //   }
  // }

  return (
      <div className="app">
        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
        <h1 style={{margin: 40}}>Fitbud Swipe Cards</h1>
        <br></br>
        
        <div className='cardContainer'>    
          {characters.map((character, index) =>
            <TinderCard ref={childRefs[index]} className='swipe' key={character.props.id} onSwipe={(dir) => swiped(dir, character.props.id, character)} onCardLeftScreen={() => outOfFrame(character.props.id)}>
              {buddies.push(character.props)}
              <div className='card' style={{maxWidth: 600}}>
                <h3>{character}</h3>
              </div>

            </TinderCard>
          )}
        </div>
        {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>}
        {/* {console.log(buddies)} */}
      </div>
  )
}

export default Simple







