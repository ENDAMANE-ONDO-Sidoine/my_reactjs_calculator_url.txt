
import React, { useState } from 'react';

const Calculator = () => {
    const [result, setResult] = useState("");

    const evaluateExpression = (expression) => {
        const operators = ['+', '-', '*', '/'];
        let operator;
        operators.forEach((op) => {
            if (expression.includes(op)) {
                operator = op;
            }
        });
        if (!operator) return expression;
        const [operand1, operand2] = expression.split(operator);
        switch (operator) {
            case '+':
                return Number(operand1) + Number(operand2);
            case '-':
                return Number(operand1) - Number(operand2);
            case '*':
                return Number(operand1) * Number(operand2);
            case '/':
                return Number(operand1) / Number(operand2);
            default:
                return "Error";
        }
    }

    const handleClick = (e) => {
        const value = e.target.name;

        switch(value) {
            case '=': {
                try {
                    setResult(evaluateExpression(result) + '');
                } catch {
                    setResult("Error");
                }
                break;
            }
            case 'c': {
                setResult("");
                break;
            }
            default: {
                setResult(result + value);
            }
        }
    }

    return (
        <> 
            <div className='bg-slate-500 p-4 rounded-2xl shadow-3xl font-extrabold'>
                <form className='mb-4'>
                    <input type="text" value={result} className='w-[250px] h-[70px] bg-sky-100 rounded shadow-2xl p-2'/>
                </form>
                <div className='grid grid-cols-4 grid-rows-4 gap-5 '>
                    <button name='1' onClick={handleClick} className='bg-cyan-50 rounded'>1</button>
                    <button name='2' onClick={handleClick} className='bg-cyan-50 rounded'>2</button>
                    <button name='3' onClick={handleClick} className='bg-cyan-50 rounded'>3</button>
                    <button name='+' onClick={handleClick} className='bg-amber-500 rounded'>+</button>
                    <button name='4' onClick={handleClick} className='bg-cyan-50 rounded'>4</button>
                    <button name='5' onClick={handleClick} className='bg-cyan-50 rounded'>5</button>
                    <button name='6' onClick={handleClick} className='bg-cyan-50 rounded'>6</button>
                    <button name='-' onClick={handleClick} className='bg-amber-500 rounded'>–</button>
                    <button name='7' onClick={handleClick} className='bg-cyan-50 rounded'>7</button>
                    <button name='8' onClick={handleClick} className='bg-cyan-50 rounded'>8</button>
                    <button name='9' onClick={handleClick} className='bg-cyan-50 rounded'>9</button>
                    <button name='*' onClick={handleClick} className='bg-amber-500 rounded'>×</button>
                    <button name='0' onClick={handleClick} className='bg-cyan-50 rounded'>0</button>
                    <button name='.' onClick={handleClick} className='bg-fuchsia-300 rounded'>.</button>
                    <button name='c' onClick={handleClick} className='bg-red-500 rounded'>c</button>
                    <button name='/' onClick={handleClick} className='bg-amber-500 rounded'>÷</button>
                    <button name='=' onClick={handleClick} className='bg-green-600 rounded col-span-4'>=</button>
                </div >   
            </div>
        </>
    );
}

export default Calculator;
