import {
  model
} from 'microback'

export default model({
  name: 'Attachment',
  paginate: true,
  schema: {
    title: String,
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