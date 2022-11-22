import { prisma } from '../../src/lib/prisma'

async function create () {
  await prisma.ingredient.createMany({
    data: [
      { name: 'Cebola', icon: '🧅' },
      { name: 'Pão', icon: '🍞' },
      { name: 'Ovo frito', icon: '🍳' },
      { name: 'Carne', icon: '🍖' },
      { name: 'Queijo', icon: '🧀' }
    ]
  })
}

create().then(() => console.log('Ingredients created!'))
