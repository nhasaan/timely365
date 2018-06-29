import { RestGen, auth, route, noauth } from 'microback'
import Agency from 'model/agency'
import util from 'util'
import _ from 'lodash'

class AgencyRest extends RestGen {
  constructor () {
    super('agency', Agency)
  }
}
export default AgencyRest
