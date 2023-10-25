import {Config} from './types';

const config: Config = {
    mongo: {
        host: 'localhost',
        port: '27017',
        database: 'example2'
    },
    server: {
        secret: "LKSDJfoij323o5ij4LSDJFoi2345",
        mongoConnect: "",
    }
};

export default config