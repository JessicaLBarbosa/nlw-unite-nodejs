import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '889b68ac-4208-4466-91e7-f94fb06fef89',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento para devs de todos os níveis.',
      maximumAttendees: 120
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
})