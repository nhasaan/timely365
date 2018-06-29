import {
  model
} from 'microback'

export default model({
  name: 'Activity',
  paginate: true,
  schema: {
    title: String,
    fromuser_id: {
      type: 'ObjectId',
      ref: 'User'
    },
    on_table: String,
    affected_table: String,
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