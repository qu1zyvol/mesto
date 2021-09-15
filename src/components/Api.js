class Api {
    constructor({ baseUrl, accessToken }){
        this.baseUrl = baseUrl;
        this.requestHeaders = {
            'Content-Type': 'application/json',
            authorization: accessToken
        };
    }

    _prepareResponse(res) {
        if(res.ok){
            return res.json();
        }
        res.json().then(error => {
            return Promise.reject(`Ошибка: ${error.message}`);
        });
    }

    _prepareError(e) {
        return e.message;
    }

    _doRequest(url, method = 'GET', data = null) {
        const reqUrl = this.baseUrl + url;
        const fetchParams = {
            method: method,
            headers: this.requestHeaders,
        };
        if(data){
            fetchParams.body = JSON.stringify(data);
        }
        return fetch(reqUrl, fetchParams).then(res => {
            return this._prepareResponse(res);
        }).catch(err => {
            return this._prepareError(err);
        });
    }

    getUserProfile() {
        return this._doRequest('/users/me');
    }

    getCards() {
        return this._doRequest('/cards');
    }

    toggleLike(cardId, isLiked){
        return this._doRequest(`/cards/likes/${cardId}`, !isLiked ? 'PUT' : 'DELETE');
    }

    createCard(cardData){
        return this._doRequest('/cards', 'POST', cardData);
    }

    deleteCard(cardId){
        return this._doRequest(`/cards/${cardId}`, 'DELETE');
    }

    updateProfile(profileData) {
        return this._doRequest('/users/me', 'PATCH', profileData);
    }

    updateAvatar(avatarData) {
        return this._doRequest('/users/me/avatar', 'PATCH', avatarData);
    }
}

export default Api;
