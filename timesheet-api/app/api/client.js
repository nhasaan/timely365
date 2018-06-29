import {
  RestGen,
  auth,
  route,
  noauth
} from 'microback'
import Client from 'model/client'
import util from 'util'
import _ from 'lodash'

class ClientRest extends RestGen {
  constructor() {
    super('client', Client)
  }
}
export default ClientRest