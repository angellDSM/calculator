import React from 'react'
import { Text, View } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorBotton } from '../components/CalculatorBotton'
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtracOperation,
    adddeOperation,
    calculatorResult,
    formula

  } = useCalculator();


  return (
    <View style={styles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.mainResult}>{formula}</Text>

        {
          (formula === prevNumber)
            ? <Text style={styles.subResult}></Text>
            : (<Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={styles.subResult}>

              {prevNumber}
            </Text>)
        }

      </View>

      <View style={styles.row}>
        <CalculatorBotton onPress={clean} label="C" blackText color={colors.lighGray} />
        <CalculatorBotton onPress={toggleSign} label="+/-" blackText color={colors.lighGray} />
        <CalculatorBotton onPress={deleteOperation} label="del" blackText color={colors.lighGray} />
        <CalculatorBotton onPress={divideOperation} label="÷" color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorBotton onPress={() => buildNumber('7')} label="7" />
        <CalculatorBotton onPress={() => buildNumber('8')} label="8 " />
        <CalculatorBotton onPress={() => buildNumber('9')} label="9" />
        <CalculatorBotton onPress={multiplyOperation} label="X" color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorBotton onPress={() => buildNumber('4')} label="4" />
        <CalculatorBotton onPress={() => buildNumber('5')} label="5" />
        <CalculatorBotton onPress={() => buildNumber('6')} label="6" />
        <CalculatorBotton onPress={subtracOperation} label="-" color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorBotton onPress={() => buildNumber('1')} label="1" />
        <CalculatorBotton onPress={() => buildNumber('2')} label="2" />
        <CalculatorBotton onPress={() => buildNumber('3')} label="3" />
        <CalculatorBotton onPress={adddeOperation} label="+" color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorBotton onPress={() => buildNumber('0')} label="0" dubleSize />
        <CalculatorBotton onPress={() => buildNumber('.')} label="." />
        <CalculatorBotton onPress={calculatorResult} label="=" color={colors.orange} />

      </View>


    </View>
  )
}
