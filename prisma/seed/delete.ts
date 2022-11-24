import { prisma } from '../../src/lib/prisma'

async function create () {
  await prisma.request.deleteMany({})
  await prisma.order.deleteMany({})
  await prisma.product.deleteMany({})
  
}

create().then(() => console.log('delete!'))
