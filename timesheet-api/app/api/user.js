import {
  RestGen,
  auth,
  route,
  noauth
} from 'microback'
import User from 'model/user'
import util from 'util'
import _ from 'lodash'

class UserRest extends RestGen {
  constructor() {
    super('user', User)
  }

  /* --------------provider profile page show -------------- */
  @route('get', 'profile/:id') // eslint disable line
  @noauth()
  async getProfile(ctx) {
    try {
      const id = ctx.params.id
      const model = await this.model.findById(id).select({
        _id: 0,
        password: 0
      }).exec()
      ctx.body = {
        success: true,
        data: model
      }
    } catch (error) {

      ctx.body = {
        success: false,
        error
      }
    }
  }

  /* --------------provider profile page show -------------- */
  @route('get', 'my-profile')
  async myProfile(ctx) {
    try {
      const id = ctx.state.user.id
      const model = await this.model.findById(id).exec()
      ctx.body = {
        success: true,
        data: model
      }
    } catch (error) {

      ctx.body = {
        success: false,
        error
      }
    }
  }

  /* --------------profile page update-------------- */
  async update(ctx) {
    try {
      const id = ctx.state.user.id
      const body = ctx.request.body
      const result = await User.update({
        _id: id
      }, body)
      ctx.body = {
        success: true,
        data: result
      }
    } catch (error) {
      ctx.body = {
        success: false,
        error
      }
    }
  }

  /* --------------signup-------------- */
  @route('post', 'auth/signup')
  @noauth()
  async signup(ctx) {
    try {
      let body = ctx.request.body
      // console.log(body)
      const resetToken = new Date().valueOf()
      body.password = auth.generateHash(body.password)
      let user = await User.create({
        fname: body.fname,
        lname: body.lname,
        username: body.username,
        password: body.password,
        email: body.email,
        reset_token: resetToken
      })
      let resetUrl = `http://${ctx.host}/user/vemail/${body.email}/${resetToken}`
      ctx.body = {
        success: true,
        data: user
      }
    } catch (error) {
      ctx.body = {
        success: false,
        error
      }
    }
  }

  /* --------------login-------------- */
  @route('post', 'auth/login')
  @noauth()
  async login(ctx) {
    const body = ctx.request.body
    const token = await auth.login(body.email, body.password, User)
    const userinfo = await User.findOne({
      "email": body.email
    }, {})
    ctx.body = {
      success: true,
      data: {
        token,
        userinfo
      }
    }
    //ctx.body = { success: true, data: user}
  }
}
export default UserRest