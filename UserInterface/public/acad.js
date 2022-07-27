function InvokeDetermineRoomDimensions() {

    execAsync(JSON.stringify({
        functionName: 'DetermineRoomDimensions',
        invokeAsCommand: false,
        functionParams: { args: 'args' }
    }),
    OnArxSuccess,
    OnArxError)


}

function OnArxSuccess(result) {
    console.log('Success')
}

function OnArxError(result) {
    console.log('Error')
}