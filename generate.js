var UglifyJS = require("uglify-js");
var convert = require("convert-source-map")
var fs = require("fs")

generateEvalFile();

var result = UglifyJS.minify([
    "simple-test.js",
    "tmp/eval.js",
    "blackboxing-lib.js",
    "blackboxing.js",
], {
    outSourceMap: "bundle.js.map",
    sourceRoot: "/",
    compress: {
        drop_debugger: false
    }
});
fs.writeFileSync("build/bundle.js", result.code);
fs.writeFileSync("build/bundle.js.map", result.map);

function generateEvalFile(){
    var result = UglifyJS.minify(["eval.js"], {
        outSourceMap: "eval.js.map",
        compress: { 
            drop_debugger: false
        }
    });

    var codeWithoutSourcemapComment = result.code.replace("//# sourceMappingURL=eval.js.map","")
    var sourceMapComment = convert.fromJSON(result.map).toComment();
    var codeToEval = `${codeWithoutSourcemapComment.replace(/\"/g,'\\\"').replace(/\n/g,"NEW_LINE")};${sourceMapComment}`
    var evalCode = `eval("${codeToEval}".replace(/NEW_LINE/g, "\\n"))`;
    fs.writeFileSync("tmp/eval.js", evalCode);
}