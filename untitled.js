let base = 5
let height = 7

const triangleArea = (base, height) => base * height / 2

console.log(`El área de un triángulo de base
${base} y altura ${height} es: ${triangleArea(base, height)}`)


const nombre = 'Sacha'
const dias = [
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
  'domingo'
]

function correr() {
  const min = 5
  const max = 15
  return Math.round(Math.random() * (max - min)) + min
}

let totalKms = 0
const length = dias.length
for (let i = 0; i < length; i++) {
  const kms = correr()
  totalKms += kms
  console.log(`El día ${dias[i]} ${nombre} corrió ${kms}kms`)
}

const promedioKms = totalKms / length
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)}kms`)

