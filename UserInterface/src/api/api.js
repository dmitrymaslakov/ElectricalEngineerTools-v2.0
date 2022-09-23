export const luminaireApi = {
    getAll() {
        let promise = new window.Autodesk.JavaScript.Promise()
        promise.then(r => r, e => e)
        let p
        window['execAsync'](
            JSON.stringify({
                functionName: 'GetPage',
                invokeAsCommand: false,
                functionParams: JSON.stringify({ Page: '1', PageSize: '5' })
                //functionParams: "{'Page':'1', 'PageSize': '5'}"
            }),
            resultAsString => {
                //promise = JSON.parse(resultAsString).retValue
                p = JSON.parse(resultAsString).retValue

                /*if (typeof (promise.success) == 'function') {
                    let resObj = JSON.parse(resultAsString);
                    if (typeof (window.apiVersion) == 'function' && window.apiVersion() > 2) {
                        promise.success(resObj.retValue);
                    } else {
                        if (resObj.hasOwnProperty('retValue'))
                            promise.success(JSON.parse(resObj.retValue));
                        else
                            promise.success(resObj);
                    }
                }*/
            },
            resultAsString => {
                p = JSON.parse(resultAsString).retValue
                //promise = JSON.parse(resultAsString).retValue
                /*if (typeof (promise.error) == 'function') {
                    let error = JSON.parse(resultAsString)

                    if (error.retCode === undefined)
                        throw TypeError('Internal error: retCode is not present.')

                    if (error.retCode === window.Autodesk.JavaScript.ErrorStatus.eOk)
                        throw TypeError('Internal error: retCode is eOk in error callback.')

                    if (error.retErrorString === undefined)
                        promise.error(error.retCode)
                    else
                        promise.error(error.retCode, error.retErrorString)
                }*/
            })

        return promise
    }
}