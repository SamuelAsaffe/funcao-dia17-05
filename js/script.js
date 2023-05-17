//   tarefa 1

function circulo() {
    let raio = prompt("qual o valor do raio ?")
    let circ = 3.14 * raio
    alert(" A área do circulo é igual a: " + circ)
}

//   terefa 2
function hipotenusa() {
    let ca = prompt("Qual o valor do cateto oposto?")
    let co = prompt("Qual o valor do cateto adjacente?")

    let hp = Math.sqrt(co * co + ca * ca)
    hp = parseFloat(hp.toFixed(2))

    alert("O valor da hipotenusa é: " + hp)
}
function dolares() {
    let reais = prompt("Quantos reais que você deseja trocar por dolares?")
    let dol = reais / 5
    dol = parseFloat(dol.toFixed(2))
    alert("Seus reais foram convertidos para " + dol + " dolares")
}

//     tarefa 4
function celcius() {
    let c = prompt("quantos graus celcius que é para converter para fahrenheit? ")
    let f = 32 + (c * 1.8)
    f = parseFloat(f.toFixed(2))
    alert("a converção resultou em " + f + " grau fahrenheit")
}

