class UserInfo {

    constructor(titleSelector, subtitleSelector, avatarSelector, api) {
        this.title = document.querySelector(titleSelector);
        this.subtitle = document.querySelector(subtitleSelector);
        this.avatar = document.querySelector(avatarSelector);
        this.getUserInfo = this.getUserInfo.bind(this);
        this.setUserInfo = this.setUserInfo.bind(this);
        this.setUserAvatar = this.setUserAvatar.bind(this);
        this._api = api;
    }

    _setUserFields({name, about, avatar}){
        this.title.textContent = name;
        this.subtitle.textContent = about;
        this.avatar.src = avatar;
    }

    fetchUserInfo() {
        return this._api.getUserProfile().then((userData) => {
            if(typeof  userData === 'object') {
                const userId = userData._id;
                this._setUserFields(userData);
                return userId;
            }
        })
    }

    getUserInfo() {
        return {
            title: this.title.textContent,
            subtitle: this.subtitle.textContent,
            avatar: this.avatar.src
        }
    }

    setUserInfo({ title, subtitle }) {
        return this._api.updateProfile({
            name: title,
            about: subtitle
        }).then(() => {
            this.title.textContent = title;
            this.subtitle.textContent = subtitle;
        });
    }

    setUserAvatar({ avatar }) {
        return this._api.updateAvatar({
            avatar
        }).then(() => {
            this.avatar.src = avatar;
        });
    }

}

export default UserInfo;
