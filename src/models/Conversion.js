import { StackLinkedList } from "../models/StackLinkedList.js";

export class Conversion{
    #prefijos = new StackLinkedList()
    #operadoresAritmeticos = new StackLinkedList()
    #expresionPrefija
    #prefijos2 = new StackLinkedList()
    #expresion1
    #count

    verOperadores(expresion){
        expresion = expresion.match(/[0-9]+|[-+*/()]/g)
        expresion = expresion.reverse()
        

        this.#count = expresion.length
        expresion.forEach(element => {
                
            switch (element) {
                case "+":
                    this.#operadoresAritmeticos.push(element)
                    break;
                case "-":
                    this.#operadoresAritmeticos.push(element)
                    break;
                case "*":
                    this.#operadoresAritmeticos.push(element)
                    break;
                case "/":
                    this.#operadoresAritmeticos.push(element)
                    break;               
                case "(":
                    this.#operadoresAritmeticos.push(element)
                    this.#operadoresAritmeticos.pop()
                    while(operadoresAritmeticos.peek() != ")")
                        this.#prefijos.push(this.#operadoresAritmeticos.pop())
                    this.#operadoresAritmeticos.pop()
                    break;
                case ")":
                    this.#operadoresAritmeticos.push(element)
                    break;
                default:
                    this.#prefijos.push(element)
                    break;   
            }  
        })

        this.#expresion1 = expresion
    }
    compartirDatos(expresion){
        while(!(this.#operadoresAritmeticos.isEmpty()))
            this.#prefijos.push(this.#operadoresAritmeticos.pop())
        expresion = []
    }

    validarResultado(){
        while(this.#prefijos.size() != 0)    
        this.#expresion1.push(this.#prefijos.pop())  
        this.#expresionPrefija = this.#expresion1.join() 
        this.#expresion1.reverse()
        let resultado
        this.#expresion1.forEach(element => {
            this.#prefijos.push(element)
            switch (element) {
                
                case "+":
                    this.#prefijos.pop()
                    resultado = Number(this.#prefijos.pop())
                    resultado += Number(this.#prefijos.pop())
                    this.#prefijos.push(resultado)
                    break;
                case "-":
                    prefijos.pop()
                    resultado = Number(this.#prefijos.pop())
                    resultado -= Number(this.#prefijos.pop())
                    this.#prefijos.push(resultado)
                    break;
                case "*":
                    this.#prefijos.pop()
                    resultado = Number(this.#prefijos.pop())
                    resultado *= Number(this.#prefijos.pop())
                    this.#prefijos.push(resultado)
                    break;
                case "/":
                    prefijos.pop()
                    resultado = Number(this.#prefijos.pop())
                    resultado /= Number(this.#prefijos.pop())
                    this.#prefijos.push(resultado)
                    break;
                default:
                    break;
            }
        });
    }
    getResultado(){
        return this.#prefijos.pop()
    }
    getExprecionPrefija(){
        
        return this.#expresionPrefija
    }
    getCount(){
        return this.#count
    }
}