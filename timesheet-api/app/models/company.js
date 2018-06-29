import {
  model
} from 'microback'

export default model({
  name: 'Company',
  paginate: true,
  schema: {
    title: String,
    country: String,
    address1: String,
    address2: String,
    logo: String,
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