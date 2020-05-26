module.exports = (app) => {

    app.get('/', (req, resp) => {
        resp.marko(
            require('../view/book/list/list.marko')
        )
    })
}

