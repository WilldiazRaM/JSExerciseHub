async function usingTryCatch (){
    try{
        let resolveValue = await asyncFunction('Thing that will fail');
        let secondValue = await secondAsyncFunction(resolveValue);
    }catch(err){
        //catches only errors in the try block
        console.log(err)
    }
}

usingTryCatch();