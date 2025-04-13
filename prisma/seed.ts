import { PrismaClient } from '@prisma/client'
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient()

async function main() {

    await prisma.payments.deleteMany({});
    for (let i = 0; i < 15; i++) {


        const member_id = faker.number.int({min: 1, max: 10})
        const amount = faker.number.int({min: 100, max: 4000})
        const paid_at = faker.date.between({from: '2000-01-01 00:00:00', to: Date.now()})


        await prisma.payments.create({
            data: {
                member_id: member_id,
                amount: amount,
                paid_at: paid_at
            }
        })

       
    }
}
main()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  
})