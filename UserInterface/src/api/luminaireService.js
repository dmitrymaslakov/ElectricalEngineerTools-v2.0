import { update } from "lodash";

export const luminaireService = {
    _b64ToUtf8(str) {
        return decodeURIComponent(escape(window.atob(str)));
    },
    _utf8ToB64(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    },
    /*_getPromise() {
        let promise = new window.Autodesk.JavaScript.Promise()
        promise.then(s => s, e => e)
        return promise
    },*/
    getLuminares(currentPage = 1, pageSize = 5) {

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
    },

    /*getLuminares(success, error, currentPage = 1, pageSize = 5) {

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
    },*/

    updateLuminare(luminaire) {
        const promise = new Promise((resolve, reject) => {
            let encodedLuminaire = this._utf8ToB64(JSON.stringify(luminaire))

            window['execAsync'](
                JSON.stringify({
                    functionName: 'UpdateLuminaire',
                    invokeAsCommand: false,
                    functionParams: encodedLuminaire
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
    },
    measureRoom() {
        const promise = new Promise((resolve, reject) => {
            window['execAsync'](
                JSON.stringify({
                    functionName: 'DetermineRoomDimensions',
                    invokeAsCommand: false,
                    functionParams: { args: 'args' }
                }),
                resultAsString => {
                    resolve(JSON.parse(resultAsString).retValue)
                },
                resultAsString => {
                    reject(resultAsString)
                }
            )
        })
        return promise
    },
    calculateIlluminance(roomData) {
        const promise = new Promise((resolve, reject) => {
            window['execAsync'](
                JSON.stringify({
                    functionName: 'CalculateIlluminance',
                    invokeAsCommand: false,
                    functionParams: JSON.stringify(roomData)
                }),
                resultAsString => {
                    //let value = this._b64ToUtf8(JSON.parse(resultAsString).retValue)
                    resolve(JSON.parse(resultAsString).retValue)
                },
                resultAsString => {
                    reject(JSON.parse(resultAsString))
                })
        })
        return promise
    }
}