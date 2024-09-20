import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'X',
    divide = '÷',
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('');

    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')

    const lastOperation = useRef<Operator>();

    useEffect(() => {

        if (lastOperation.current) {
            const fristFormulaPart = formula.split(' ').at(0);
            setFormula(`${fristFormulaPart} ${lastOperation.current} ${number}`)
        } else {
            setFormula(number)
        }

    }, [number])


    useEffect(() => {
        const subResult = calculateSubResult();
        setPrevNumber(`${ subResult}`);
    
    },[formula])
    


    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        lastOperation.current = undefined;
        setFormula('0')
    }

    //borrar el ultimo numero
    const deleteOperation = () => {
        let currenSing = '';
        let temporalNumber = number;

        if (number.includes('-')) {
            currenSing = '-';
            temporalNumber = number.substring(1);
        }

        if (temporalNumber.length > 1) {
            return setNumber(currenSing + temporalNumber.slice(0, -1));
        }

        setNumber('0')

    }

    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }
        setNumber('-' + number);
    }



    const buildNumber = (numberString: string) => {
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            //puntp decimal
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            //Evaluar si es otro cero y no un punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            //evaluar si es diferente de cero, no hay punto decimal y es el primer numero
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            //evidar 0000000
            if (numberString === '0' && !number.includes('.')) {
                return;
            }

            return setNumber(number + numberString)

        }

        setNumber(number + numberString);

    }

    const setLasNumber = () => {
        calculatorResult();
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1))
        } else {
            setPrevNumber(number);
        }
        setNumber('0')
    }

    const divideOperation = () => {
        setLasNumber();
        lastOperation.current = Operator.divide

    }

    const multiplyOperation = () => {
        setLasNumber();
        lastOperation.current = Operator.multiply

    }

    const subtracOperation = () => {
        setLasNumber();
        lastOperation.current = Operator.subtract

    }
    const adddeOperation = () => {
        setLasNumber();
        lastOperation.current = Operator.add

    }

    const calculatorResult = () => {

        const result = calculateSubResult();
        setFormula(`${result}`);

        lastOperation.current = undefined;
        setPrevNumber('0');
    }

    const calculateSubResult = (): number=>{

        const [fristValue, operation, secondValue] = formula.split(' ');

        const num1 = Number(fristValue);
        const num2 = Number(secondValue);

        if(isNaN(num2)) return num1;


        switch (operation) {

            case Operator.add:
                return num1 + num2
                

            case Operator.subtract:
                return num1 - num2
                

            case Operator.multiply:
                return num1 * num2
                

            case Operator.divide:
                return num1 / num2
                

            default:
                throw new Error('operacion no inplementada')
        }
    }



    return {
        //propiedades
        number,
        prevNumber,
        formula,


        //metodos
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        divideOperation,
        multiplyOperation,
        subtracOperation,
        adddeOperation,
        calculatorResult


    }
}
