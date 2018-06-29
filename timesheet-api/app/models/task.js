import {
  model
} from 'microback'

export default model({
  name: 'Task',
  paginate: true,
  schema: {
    title: String,
    description: String,
    priority: String,
    estimatedhrs: String,
    duedate: {
      type: Date,
      default: Date.now
    },
    loggedhrs: String,
    progress: String,
    completed_on: {
      type: Date,
      default: Date.now
    },
    completed_by: {
      type: 'ObjectId',
      ref: 'User'
    },
    is_active: {
      type: Boolean,
      default: false
    },
    attachment_id: {
      type: 'ObjectId',
      ref: 'Attachment'
    },
    project_id: {
      type: 'ObjectId',
      ref: 'Project'
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