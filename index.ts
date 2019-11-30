import { prisma } from './generated/prisma-client'

async function main() {

  // const newUser = await prisma.createUser({
  //   name: 'yuri escritor',
  //   email: "y@y.com.br",
  //   posts: {
  //     create: [
  //       { title: "formik 1" },
  //       { title: "formik 2" },
  //     ]
  //   }
  // });
  // console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  const p = await prisma.posts({
    where: {
      author: {
        name_starts_with: 'yuri'
      }
    }
  })

  console.log(p)
}

main().catch(console.log)