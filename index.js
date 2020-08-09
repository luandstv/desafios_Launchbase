const classA = [
  {
    name: "luan",
    grade: 10
  },
  {
    name: "diego",
    grade: 10
  },
  {
    name: "michel",
    grade: 7
  },
  {
    name: "luis",
    grade: 4.5
  }
]

const classB = [
  {
    name: "jorge",
    grade: 8
  },
  {
    name: "zezinho",
    grade: 5
  },
  {
    name: "lucas",
    grade: 6
  }
]

function calculateAverage(stundents) {
  let sum = 0

  for (let i = 0; i < stundents.length; i++) {
    sum = sum + stundents[i].grade
  }

  const avarage = sum / stundents.length

  return avarage

}

function sandMessage(avarage, turma) {
  if (avarage >= 5) {
    console.log(` ${turma} average: ${avarage.toFixed(2)}. Congrats!`)
  } else {
    console.log(`${turma} average: ${avarage.toFixed(2)}. Is not good`)
  }
}

function markAsFlunked(stundent) {
  stundent.flunked = false;
  if (stundent.grade < 5) {
    stundent.flunked = true;
  }

}

function sandMessageflunked(stundent) {
  if (stundent.flunked) {
    console.log(`Stundent ${stundent.name} flunked! grade: ${stundent.grade}`)
  }
}

function stundentsflunkeds(stundents) {
  for (let stundent of stundents) {
    markAsFlunked(stundent)
    sandMessageflunked(stundent)
  }
}

const avarage1 = calculateAverage(classA)
const avarage2 = calculateAverage(classB)

sandMessage(avarage1, 'Class A')
sandMessage(avarage2, 'Class B')

stundentsflunkeds(classA)
stundentsflunkeds(classB)
