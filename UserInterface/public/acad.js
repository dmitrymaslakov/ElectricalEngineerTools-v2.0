function InvokeDetermineRoomDimensions() {

    let res = execAsync(JSON.stringify({
        functionName: 'DetermineRoomDimensions',
        invokeAsCommand: false,
        functionParams: { args: 'args' }
    }),
    OnArxSuccess,
    OnArxError)


}

function OnArxSuccess(result) {
    let res = JSON.parse(result)
    console.log('Success')
}

function OnArxError(result) {
    console.log('Error')
}