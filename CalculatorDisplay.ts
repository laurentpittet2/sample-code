import {Add} from './operations';

let memory = []

class CalculatorDisplay {

  display = ''

  number1: any
  number2: any

  constructor() {
    // constructor of the class
    this.display = ''
  }

  static newDisplay() {
    return new CalculatorDisplay()
    console.log('Factory created new calculator')
  }

  // region OPS

  add(a, b) {
    this.number1 = a
    this.number2 = b
    this.display = Add(this.number1, this.number2)
  }


  substract(a, b) {
    console.log('TODO: implement')
  }

  multiply(a, b) {
    console.log('TODO: implement')
  }

  divide(a, b) {
    console.log('TODO: implement')
  }


  // endregion
  // region: DISPLAY

  clear() {
    this.display = ''
    this.number1 = null
    this.number2 = null
  }

  print() {
    const data = this.display
    console.log(data)
  }

  // no longer needed
  // readFromDisplay() {
  //   this.number1 = this.display[0]
  //   this.number2 = this.display[1]
  // }
  //

  // endregion
  // region: MEMORY

  saveDisplayToMemory() {
    const obj = this.display
    memory.push(obj)
  }

  resetFromMemory() {
    const obj = memory.concat()
    this.display = obj
    memory = []
  }

  accessMemory(index) {
    return memory[index]
  }

}