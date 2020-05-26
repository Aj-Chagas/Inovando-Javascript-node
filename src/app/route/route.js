module.exports = (app) => {

    app.get('/', (req, resp) => {
        resp.marko(
            require('../view/book/list/list.marko'),
            {
                livros: [
                    {
                        id:1,
                        title: 'Fundamentos do node'
                    },
                    {
                        id: 2,
                        title: 'Node avançado'
                    }
                ]
            }
        )
    })
}

 