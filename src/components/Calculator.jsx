import { useState } from 'react';
import '../style/Calculator.css'


const Calculator = () => {
    const [num, setNum] = useState(0)

    function inputNum(e) {
        if (num === 0) {
            setNum(e.target.value)
        } else
            setNum(num + e.target.value)
    }

    function clear() {
        setNum(0)
    }

    function porcetage() {
        setNum(num / 100)
    }

    function calculate(e) {        
        if ( e.value === "+") {
            setNum(num + num)
        } if (num === "-") {
            setNum(num - num)
        }if(porcetage){
            setNum(num / num)
        }if(num === "*"){
            setNum(num * num)
        }
        }
    
    return (
        <div className='center'>
            <div className='result'>{num}</div>
            <div className='wrapper'>
                <button value={"AC"} onClick={clear}>AC</button>
                <button value={"()"} onClick={inputNum}>()</button>
                <button value={"%"} onClick={inputNum}>%</button>
                <button value={"/"} onClick={inputNum}>/</button>
                <button value={7} onClick={inputNum}>7</button>
                <button value={8} onClick={inputNum}>8</button>
                <button value={9} onClick={inputNum}>9</button>
                <button value={"X"} onClick={inputNum}>X</button>
                <button value={4} onClick={inputNum}>4</button>
                <button value={5} onClick={inputNum}>5</button>
                <button value={6} onClick={inputNum}>6</button>
                <button value={"-"} onClick={inputNum}>-</button>
                <button value={1} onClick={inputNum}>1</button>
                <button value={2} onClick={inputNum}>2</button>
                <button value={3} onClick={inputNum}>3</button>
                <button value={"+"} onClick={inputNum}>+</button>
                <button value={0} onClick={inputNum}>0</button>
                <button value={"."} onClick={inputNum}>.</button>
                <button value={"AC"} onClick={inputNum}></button>
                <button onClick={calculate}>=</button>
            </div>
        </div>
    )
}

export default Calculator;