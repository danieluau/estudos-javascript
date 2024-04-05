import inquirer from "inquirer";
class Vertice {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  getX() {
    return this.#x;
  }
  getY() {
    return this.#y;
  }

//   move(novoX, novoY) {
//     const novoX = this.#x;
//     const novoY = this.#y;
//   }

  equals(vetor2){
    if (vetor2.getX() === this.#x && vetor2.getY()){
        return true
    }else{
        return false
    }
  }

  distanciaEntreVertices(vetor2){
    const dist1 = vetor2.getX() - this.#x
    const dist2 = vetor2.getY() - this.#y
    const distancia = Math.sqrt((dist1 ** 2) + (dist2 ** 2))
    return distancia
    
  }
}

function criarVertice() {
  inquirer.prompt([
    {
      type: "input",
      name: "x1",
      message: "Digite a cordenada X do primeiro vértice",
    },
    {
      type: "input",
      name: "y1",
      message: "Digite a cordenada Y do primeiro vértice",
    },
    {
      type: "input",
      name: "x2",
      message: "Digite a cordenada X do segundo vértice",
    },
    {
      type: "input",
      name: "y2",
      message: "Digite a cordenada Y do segundo vértice",
    },
    {
      type: "input",
      name: "x3",
      message: "Digite a cordenada X do terceiro vértice",
    },
    {
      type: "input",
      name: "y3",
      message: "Digite a cordenada Y do terceiro vértice",
    },
  ]).then((answers => {
    const primeiroVertice = new Vertice(Number(answers.x1), Number(answers.y1))
    const segundoVertice = new Vertice(Number(answers.x2), Number(answers.y2))
    const terceiroVertice = new Vertice(Number(answers.x3), Number(answers.y3))
    const distanciaVertices = primeiroVertice.distanciaEntreVertices(segundoVertice)
    const equalsVertices = primeiroVertice.equals(segundoVertice)
    console.log(`
Vertice 1:
       X: ${primeiroVertice.getX()}
       Y: ${primeiroVertice.getY()}
Vértice 2
       X: ${segundoVertice.getX()}
       Y: ${segundoVertice.getY()}
Vértice 3
       X: ${terceiroVertice.getX()}
       Y: ${terceiroVertice.getY()}
`)

console.log(`Distância entre vértices 1 e 2: ${distanciaVertices}`)

console.log(equalsVertices)
  }))



}

criarVertice()

export default Vertice;
