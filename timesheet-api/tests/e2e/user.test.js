import test from 'ava'
import { agent } from 'supertest'
import { server, auth } from 'microback'
import User from 'model/user'
const request = agent(server())
var user = {}

test.before('db init', async (t) => {
  user = await User.create({ email: 'test@email.com', password: auth.generateHash('123456') })
})

test('login user', async (t) => {
  let res = await request
    .post('/api/users/auth/login')
    .send({ email: 'test@email.com', password: '123456' })
  t.is(200, res.status)
  t.is(true, res.body.success)
  t.is(true, res.body.data.length > 0)
})

test.after('db clean', async (t) => {
  await User.deleteOne({ _id: user._id })
})
