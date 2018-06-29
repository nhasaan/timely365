import {
  RestGen,
  auth,
  route,
  noauth
} from 'microback'
import Company from 'model/company'
import util from 'util'
import _ from 'lodash'

class CompanyRest extends RestGen {
  constructor() {
    super('company', Company)
  }
}
export default CompanyRest