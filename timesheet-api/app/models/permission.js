import {
  model
} from 'microback'

export default model({
  name: 'Permission',
  paginate: true,
  schema: {
    menu_id: {
      type: 'ObjectId',
      ref: 'Menu'
    },
    user_id: {
      type: 'ObjectId',
      ref: 'User'
    },
    canview: {
      type: Boolean,
      default: false
    },
    canedit: {
      type: Boolean,
      default: false
    },
    candelete: {
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