function blackboxedLib(callback){
    callback();
}
function blackboxedLibThrowingException(callback){
    throw new Error("Shouldn't pause on this")
    callback();
}