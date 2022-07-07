export default class Api {
  constructor(options) {
    this._url = options.url;
    this._token = options.token;
  }

  _resultRequest(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `Произошла ошибка ${res.status} - ${res.statusText}`
      );
    }
  }
// Загрузка информации о пользователе

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._resultRequest(res));
  }

  getInitialCards() {
    return fetch(`${this._url}cards`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._resultRequest(res));
  }

  editProfile(data) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    }).then((res) => this._resultRequest(res));
  }

  addNewCard(data) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    }).then((res) => this._resultRequest(res));
  }

  deleteCard(id) {
    return fetch(`${this._url}cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      }
    }).then((res) => this._resultRequest(res));
  }

  editAvatar(data) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar,
      })
    }).then((res) => this._resultRequest(res));
  }
}