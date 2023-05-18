export const luminaireService = {
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
    /*getLuminares(currentPage = 1, pageSize = 5) {

        const promise = new Promise((resolve, reject) => {
            window['execAsync'](
                JSON.stringify({
                    functionName: 'GetPage',
                    invokeAsCommand: false,
                    functionParams: JSON.stringify({ Page: currentPage, PageSize: pageSize })
                }),
                resultAsString => {
                    let value = this._b64ToUtf8(JSON.parse(resultAsString).retValue)
                    resolve(JSON.parse(value))
                },
                resultAsString => {
                    reject(resultAsString)
                })
        })
        return promise
    }*/

    getLuminares(success, error, currentPage = 1, pageSize = 5) {

        window['execAsync'](
            JSON.stringify({
                functionName: 'GetPage',
                invokeAsCommand: false,
                functionParams: JSON.stringify({ Page: currentPage, PageSize: pageSize })
            }),
            resultAsString => {
                let value = this._b64ToUtf8(JSON.parse(resultAsString).retValue)
                success(JSON.parse(value))
            },
            resultAsString => {
                error(resultAsString)
            })
    }
}