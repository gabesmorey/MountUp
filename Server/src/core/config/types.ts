export interface Config{
    mongo: {
        host: string,
        port: string,
        database: string
    },
    server: {
        secret: string,
        mongoConnect: string,
    }
}