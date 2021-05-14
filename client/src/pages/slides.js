import React, { useState, useMemo } from 'react';
import '../css/SwipePage.css';
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card';

//Almost all of this code is borrowed from Tinder Card code

const alreadyRemoved = []

const Simple = (props) => {
  
  const db = props.db;
  let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  console.log(db)
  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [db.length])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
      <div className="app">
        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
        <h1>Fitbud Swipe Cards</h1>
        <br></br>
        
        <div className='cardContainer'>    
          {characters.map((character, index) =>
            <TinderCard ref={childRefs[index]} className='swipe' key={character} onSwipe={(dir) => swiped(dir, character)} onCardLeftScreen={() => outOfFrame(character)}>
              <div className='card' style={{maxWidth: 600}}>
                <h3>{character}</h3>
              </div>
            </TinderCard>
          )}
        </div>
        
        {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>}
      </div>
  )
}

export default Simple