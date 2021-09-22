import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@skishop.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Fred Flinstone',
    email: 'fred@skishop.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Betty Rubble',
    email: 'betty@skishop.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
