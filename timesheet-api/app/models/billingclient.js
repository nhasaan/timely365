import {
  model
} from 'microback'

export default model({
  name: 'Billingclient',
  paginate: true,
  schema: {
    client_id: {
      type: 'ObjectId',
      ref: 'Client'
    },
    clientname: String,
    country: String,
    address1: String,
    address2: String,
    clientlogo: String,
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