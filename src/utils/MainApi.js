class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._contentType = options.headers['Content-Type'];
    this._baseUrlForImages = options.baseUrlForImages;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();    
    }
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

  createMovie(movieData, jwt) {
    return (
      fetch(`${this._baseUrl}/movies`, {
        method: 'POST',
        headers: {
          'Content-Type': this._contentType,
          'Authorization' : `Bearer ${jwt}`
        },
        body: JSON.stringify({
          country: movieData.country,
          director: movieData.director,
          duration: movieData.duration, 
          year: movieData.year,
          description: movieData.description,
          image: this._baseUrl + movieData.image.url,
          trailer: movieData.trailerLink,
          nameRU: movieData.nameRU,
          nameEN: movieData.nameEN,
          thumbnail: this._baseUrl + movieData.image.formats.thumbnail.url, 
          movieId: movieData.id,
        })
      })
      .then(res => this._getResponseData(res))       
    )    
  }

  deleteMovie(_id, token) {
    return (
      fetch(`${this._baseUrl}/movies/${_id}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${token}`,
        }
      })
      .then(res => this._getResponseData(res)) 
    )    
  }

  getAllMoviesByCurrentUser(jwt) {
    return (
      fetch(`${this._baseUrl}/movies`, {
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
  },
  baseUrlForImages: 'https://api.nomoreparties.co'
}); 

export default mainApi;
