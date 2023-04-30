class ApiFeatures {
  private username: string = ''
  query: string = ''
  constructor(username: string) {
    this.username = username
  }

  getUserName() {
    return this.username
  }
}

const user = new ApiFeatures('Muhammad Lam')

console.log(user instanceof ApiFeatures)
user.getUserName()

export default ApiFeatures
