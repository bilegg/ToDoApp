module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'taskData',
        title: process.env.DB_USER || 'taskData',
        description: process.env.DB_DESC || 'taskData',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './taskData.sqlite'
        }
    }
}
