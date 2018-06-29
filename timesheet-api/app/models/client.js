import {
  model
} from 'microback'

export default model({
  name: 'Client',
  paginate: true,
  schema: {
    title: String,
    country: String,
    address1: String,
    Address2: String,
    logo: String,
    company_id: {
      type: 'ObjectId',
      ref: 'Company'
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