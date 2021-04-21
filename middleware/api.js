export class Request {
  constructor (requestObject = {}) {
    this.query = ''
    this.requestObject = requestObject
    this.reserved = [
      '__limit',
      '__offset',
      '__gte',
      '__lte',
      '__ne',
      '__sort',
      '__like'
    ]
    this.__parseRequestObject()
  }

  __parseRequestObject () {
    const reqObj = this.requestObject
    let query = this.query
    for (const key in reqObj) {
      const value = reqObj[key]
      query += `&${key}=${value}`
    }
    this.query = query.replace(/^&/, '?')
  }

  edit (requestObject) {
    this.requestObject = Object.assign(requestObject, this.requestObject)
    this.__parseRequestObject()
  }

  remove (key) {
    delete this.requestObject[key]
  }
}

export class Api extends Request {
  constructor (requestObject = {}) {
    super(requestObject)
    // prod this.location = document.location.origin + '/api/'
    this.location = 'http://roniursu/api/'
  }

  getLocation () {
    return this.location
  }

  genUrl (endpoint) {
    return `${this.location}${endpoint}${this.query}`
  }
}
