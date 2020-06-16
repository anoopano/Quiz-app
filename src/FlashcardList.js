import React from 'react'
import Flashcard from './Flashcard'
import './app.css';

 function FlashcardList({flashcards}) {
    return (
        <div className="cardgrid">
          {
              flashcards.map(flashcard=>{
                 return <Flashcard flashcard={flashcard} key={flashcard.id}/>
              })
          }
            
        </div>
    )
}
export default FlashcardList
