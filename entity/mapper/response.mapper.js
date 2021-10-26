class Response {
  constructor(msg, data, success = true) {
    this.success = success
    this.message = msg,
    this.data = data
  }
}

module.exports = Response;
