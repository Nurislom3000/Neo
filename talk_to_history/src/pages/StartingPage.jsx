import React from 'react'

const StartingPage = () => {
    const questionStyle = 'flex cursor-pointer bg-blue-300 rounded-2xl justify-center items-center'
    const logAnswer = (AnserID) => {
        console.log("AnswerID:", AnserID);
    }

  return (
    <div className='w-screen h-screen fixed left-0 top-0 grid grid-rows-4 bg-amber-50'>
        <div className='bg-amber-500 row-span-3'>
            {/* <h1>Hello</h1> */}
        </div>
        <div className='grid grid-cols-2 gap-4 grid-rows-2 p-4'>
            <button onClick={() => {logAnswer(1)}} className={questionStyle}>«Когда и как вы начали своё восхождение к власти?»</button>
            <button onClick={() => {logAnswer(2)}} className={questionStyle}>«Какие ваши походы стали самыми важными для истории?»</button>
            <button onClick={() => {logAnswer(3)}} className={questionStyle}>«Почему Самарканд называют “жемчужиной империи”? Что вы сделали для этого города?»</button>
            <button onClick={() => {logAnswer(4)}} className={questionStyle}>«Удалось ли сохранить вашу империю после вашей смерти?»</button>
        </div>
    </div>
  )
}

export default StartingPage