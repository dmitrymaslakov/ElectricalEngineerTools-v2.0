export const luminaireApi = {
    getAll(query, onSuccess, onError) {
        return window['execAsync'](
            JSON.stringify({
                functionName: query.functionName,
                invokeAsCommand: false,
                functionParams: query.functionParams
            }),
            onSuccess,
            onError
        )
    }
}