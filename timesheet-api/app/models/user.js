import {
  model
} from 'microback'

export default model({
  name: 'User',
  paginate: true,
  schema: {
    username: String,
    password: String,
    fname: String,
    lname: String,
    email: String,
    address1: String,
    address2: String,
    potrait: String,
    company_id: {
      type: 'ObjectId',
      ref: 'Company'
    },
    client_id: {
      type: 'ObjectId',
      ref: 'Client'
    },
    is_active: {
      type: Boolean,
      default: false
    },
    is_deleted: {
      type: Boolean,
      default: false
    },
    created_by: {
      type: 'ObjectId',
      ref: 'User'
    },
    updated_by: {
      type: 'ObjectId',
      ref: 'User'
    },
    others: String
  }
})