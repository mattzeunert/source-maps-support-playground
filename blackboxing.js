debugger; // try step into next line: should continue straight to the console call
blackboxedLib(function(){
    console.log("Blackboxed script test")
});
// make sure pause on exceptions is enabled.. should not pause on this exception
blackboxedLibThrowingException(function(){})