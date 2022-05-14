class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._contentType = options.headers['Content-Type'];
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();    
    }
    console.log(res)
    return Promise.reject(`Ошибка: ${res.status}`); 
  }

  signUp(name, email, password) {
    return (
      fetch(`${this._baseUrl}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': this._contentType
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      })
      .then(res => this._getResponseData(res))       
    )    
  }

  signIn(email, password) {
    return (
      fetch(`${this._baseUrl}/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': this._contentType
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(res => this._getResponseData(res))       
    )    
  }

  getUserData(jwt) {
    return (
      fetch(`${this._baseUrl}/users/me`, {
        headers: {
          'Content-Type': this._contentType,
          'Authorization' : `Bearer ${jwt}`
        }
      })
      .then(res => this._getResponseData(res))
    )
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.movies-explorer.alpol.nomoredomains.work',
  headers: {
    'Content-Type': 'application/json'
  }
}); 

export default mainApi;
