import {
  model
} from 'microback'

export default model({
  name: 'Project',
  paginate: true,
  schema: {
    title: String,
    description: String,
    priority: String,
    estimated_hours: String,
    duedate: {
      type: Date,
      default: Date.now
    },
    logged_hours: String,
    progress: String,
    completed_on: {
      type: Date,
      default: Date.now
    },
    is_active: {
      type: Boolean,
      default: false
    },
    attachment_id: {
      type: 'ObjectId',
      ref: 'Attachment'
    },
    agency_id: {
      type: 'ObjectId',
      ref: 'Agency'
    },
    client_id: {
      type: 'ObjectId',
      ref: 'Client'
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