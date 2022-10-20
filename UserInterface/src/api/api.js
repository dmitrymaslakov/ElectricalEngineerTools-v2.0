export const luminaireApi = {
    _getPromise(){
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
                promise.success(JSON.parse(resultAsString).retValue)
            },
            resultAsString => {
                promise.error(JSON.parse(resultAsString))
            })
        return promise
    },
    postLuminare(luminaire){
        let promise = this._getPromise()

        window['execAsync'](            
            JSON.stringify({
                functionName: 'UpdateLuminaire',
                invokeAsCommand: false,
                functionParams: JSON.stringify(luminaire)
            }),
            resultAsString => {
                promise.success(JSON.parse(resultAsString).retValue)
            },
            resultAsString => {
                promise.error(JSON.parse(resultAsString))
            }
        )
    }
}