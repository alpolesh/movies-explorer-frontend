class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._contentType = options.headers['Content-Type'];
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();    
    }
    return Promise.reject(`Ошибка: ${res.status}`); 
  }

  getInitialMovies() {
    return (
      fetch(this._baseUrl)
      .then(res => this._getResponseData(res))
    )
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
}); 

export default moviesApi;
