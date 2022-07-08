export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector, profileAvatar }) {
    this._nameElement = document.querySelector(profileNameSelector);
    this._jobElement = document.querySelector(profileJobSelector);
    this._profileAvatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent
    }
  }

  setUserInfo(title, job) {
    this._nameElement.textContent = title;
    this._jobElement.textContent = job;
  }

  setUserAvatar(data) {
    this._profileAvatar.src = data.avatar;
  }
}