import test from 'ava'
import User from 'model/user'
import { auth } from 'microback'

test('user model', async t => {
  var user = await User.create({ email: 'user@email.com', password: auth.generateHash('1') })
  t.is('user@email.com', user.email)
  var del = await User.deleteOne({ email: 'user@email.com' })
  t.is(1, del.deletedCount)
})
