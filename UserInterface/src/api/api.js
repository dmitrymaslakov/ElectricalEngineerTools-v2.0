export const luminaireApi = {
    _b64ToUtf8(str) {
        return decodeURIComponent(escape(window.atob(str)));
    },
    _utf8ToB64(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    },
    _getPromise() {
        let promise = new window.Autodesk.JavaScript.Promise()
        promise.then(s => s, e => e)
        return promise
    },
    getLuminaresPage(currentPage = 1, pageSize = 5) {
        let promise = this._getPromise()

        window['execAsync'](
            JSON.stringify({
                functionName: 'GetPage',
                invokeAsCommand: false,
                functionParams: JSON.stringify({ Page: currentPage, PageSize: pageSize })
            }),
            resultAsString => {
                let value = this._b64ToUtf8(JSON.parse(resultAsString).retValue)
                promise.success(JSON.parse(value))
            },
            resultAsString => {
                promise.error(JSON.parse(resultAsString))
            })
        return promise
    },
    postLuminare(luminaire) {
        let promise = this._getPromise()
        let encodedLuminaire = this._utf8ToB64(JSON.stringify(luminaire))

        window['execAsync'](
            JSON.stringify({
                functionName: 'UpdateLuminaire',
                invokeAsCommand: false,
                functionParams: encodedLuminaire
            }),
            resultAsString => {
                let value = this._b64ToUtf8(JSON.parse(resultAsString).retValue)
                promise.success(JSON.parse(value))
            },
            resultAsString => {
                promise.error(JSON.parse(resultAsString))
            })
        return promise
    },
    getIlluminance(roomData){
        let promise = this._getPromise()
        console.log(roomData)

        window['execAsync'](
            JSON.stringify({
                functionName: 'CalculateIlluminance',
                invokeAsCommand: false,
                functionParams: JSON.stringify(roomData)
            }),
            resultAsString => {
                //let value = this._b64ToUtf8(JSON.parse(resultAsString).retValue)
                promise.success(JSON.parse(resultAsString).retValue)
            },
            resultAsString => {
                promise.error(JSON.parse(resultAsString))
            })
        return promise
    }
}