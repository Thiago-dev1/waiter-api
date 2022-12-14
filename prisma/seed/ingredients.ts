import { prisma } from '../../src/lib/prisma'

async function create () {
  await prisma.ingredient.createMany({
    data: [
      { name: 'Cebola', icon: 'đ§' },
      { name: 'PĂŁo', icon: 'đ' },
      { name: 'Ovo frito', icon: 'đł' },
      { name: 'Carne', icon: 'đ' },
      { name: 'Queijo', icon: 'đ§' }
    ]
  })
}

create().then(() => console.log('Ingredients created!'))
