export default {
  mounted () {
    this.uuid = createdId()
  }
}

function createId () {
  return Math.random().toString(36).substring(3,8)
}