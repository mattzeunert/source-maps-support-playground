# Source Maps Support Playground

Repo with demo code to verify that source maps are handled correctly by the debugger.

# How to use

1. `npm install`
2. `node generate.js`
3. `python -m SimpleHTTPServer`
4. Open [http://localhost:8000](http://localhost:8000) in Chrome and open DevTools
5. Reload the page and check Chrome pauses where expected (blackbox `blackboxing-lib.js` for the blackboxing test)