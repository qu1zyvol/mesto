class UserInfo {

    constructor(titleSelector, subtitleSelector) {
        this.title = document.querySelector(titleSelector);
        this.subtitle = document.querySelector(subtitleSelector);
        this.getUserInfo = this.getUserInfo.bind(this);
        this.setUserInfo = this.setUserInfo.bind(this);
    }

    getUserInfo() {
        return {
            title: this.title.textContent,
            subtitle: this.subtitle.textContent
        }
    }

    setUserInfo({ title, subtitle }) {
        this.title.textContent = title;
        this.subtitle.textContent = subtitle;
    }

}

export default UserInfo;
