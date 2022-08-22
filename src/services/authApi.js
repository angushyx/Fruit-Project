import axios from 'axios'
const APL_URL = 'https://reactmealapp.herokuapp.com/api/users'

class AuthService {
  signup(name, email, password, role, confirmPassword, imageUrl) {
    return axios.post(APL_URL + '/signup', {
      name,
      email,
      password,
      role,
      confirmPassword,
      imageUrl,
    })
  }
  login(email, password) {
    return axios.post(APL_URL + '/signIn', {
      email,
      password,
    })
  }
  logout() {
    localStorage.removeItem('user')
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
  }
}

export default new AuthService()
