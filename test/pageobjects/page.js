module.exports = class page {

    open (path) {
        return browser.url(`http://localhost:4000/${path}`)
    }
}
