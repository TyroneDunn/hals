import {Config} from "../app/config.type";
import session, {SessionOptions} from "express-session";
import MongoStore from "connect-mongo";
import {RequestHandler} from "express";

export {sessionMiddleware as session};

const sessionMiddleware =
    (config: Config): RequestHandler => session(configureSessionOptions(config));

const configureSessionOptions = (config: Config): SessionOptions =>
    ({
        secret: config.authOptions.sessionSecret,
        resave: false,
        saveUninitialized: true,
        store: configureSessionStore(config),
        cookie: {
            // Session Lifespan: 21 Days.
            maxAge: 21 * (24 * (60 * (1000 * 60))),
            httpOnly: (config.nodeEnv === "production"),
        },
    });

const configureSessionStore = (config: Config) => {
    let sessionStore;
    switch (config.authOptions.db) {
        case "MongoDB": {
            sessionStore = configureMongoSessionStore(config.authOptions.dbUrl);
            break;
        }
        default: {
            throw new Error(`"${config.authOptions.db} session store not implemented. Please choose another session store option.`);
        }
    }
    return sessionStore;
};

const configureMongoSessionStore = (url: string): MongoStore =>
    MongoStore.create({
        mongoUrl: url,
        collectionName: 'sessions',
    });
