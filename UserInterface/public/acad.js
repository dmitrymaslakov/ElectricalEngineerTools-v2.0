function InvokeRead() {

    execAsync(JSON.stringify({
        functionName: 'TestDotNetRead',
        invokeAsCommand: false,
        functionParams: { args: 'args' }
    }),
    OnArxSuccess,
    OnArxError);
}

function InvokeWrite() {

    execAsync(JSON.stringify({
        functionName: 'TestDotNetWrite',
        invokeAsCommand: false,
        functionParams: { args: 'args' }
    }),
    OnArxSuccess,
    OnArxError);
}

function OnArxSuccess(result) {
    console.log('')
}

function OnArxError(result) {
    console.log('')
}