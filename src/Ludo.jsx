import { useState } from "react"

export default function LudoButton(){
    let [moves, setMoves] = useState({red: 0, green: 0, yellow: 0, blue: 0});

    function updateRed(){
        // moves.red += 1;
        setMoves((prevMoves)=>{
            return {...prevMoves, red: prevMoves.red +1}
        })
    }
    function updateGreen(){
        // moves.green += 1;
        setMoves((prevMoves)=>{
            return {...prevMoves, green: prevMoves.green +1}
        })
    }
    function updateYellow(){
        // moves.yellow += 1;
        setMoves((prevMoves)=>{
            return {...prevMoves, yellow: prevMoves.yellow +1}
        })
    }
    function updateBlue(){
        // moves.blue += 1;
        setMoves(setMoves((prevMoves)=>{
            return {...prevMoves, blue: prevMoves.blue +1}
        }))
    }
    return (
        <>
            <p>Red = {moves.red}</p>
            <button style={{backgroundColor: "red", color:"white"}} onClick={updateRed}>+1</button>
            <p>Green = {moves.green}</p>
            <button style={{backgroundColor: "green", color:"white"}} onClick={updateGreen}>+1</button>
            <p>Yellow = {moves.yellow}</p>
            <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
            <p>Blue = {moves.blue}</p>
            <button style={{backgroundColor: "blue", color:"white"}} onClick={updateBlue}>+1</button>
        </>
        
    )
}