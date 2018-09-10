module.exports = app => {
    app.get('/', (req, res) => res.send('Hello World!'));

    /**
     * @UserApiRoutes
     */
    app.use('/api/v1/users', require('../api/v1/users'));

    /**
     * @PostsApiRoutes
     */
    app.use('/api/v1/posts', require('../api/v1/posts'));

};