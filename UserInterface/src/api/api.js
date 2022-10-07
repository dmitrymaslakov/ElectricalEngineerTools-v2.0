export const luminaireApi = {
    getLuminaresPage(currentPage = 1, pageSize = 5) {
        let promise = new window.Autodesk.JavaScript.Promise()
        promise.then(s => s, e => e)

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
    }
}