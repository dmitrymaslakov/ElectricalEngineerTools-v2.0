export const luminaireApi = {
    getAll() {
        let p
        window['execAsync'](
            JSON.stringify({
                functionName: 'GetPage',
                invokeAsCommand: false,
                functionParams: JSON.stringify({ Page: 2, PageSize: 5 })
            }),
            resultAsString => {
                p = JSON.parse(resultAsString).retValue
            },
            resultAsString => {
                p = JSON.parse(resultAsString).retValue
            })
            debugger
        return p
    }
}