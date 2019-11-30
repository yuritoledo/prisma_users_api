import { prisma } from './generated/prisma-client'

async function main() {

  const user = await prisma.user({
    id: 'ck3kzm36d000i0712au90286j',
  })
  console.log(user)

  // const newUser = await prisma.createUser({ name: 'olá, eu sou umn buttão' });
  // console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  const allUsers = await prisma.users();
  console.log(allUsers);
}

main().catch(console.log)