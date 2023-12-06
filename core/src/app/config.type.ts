import {CorsOptions} from "cors";
import {OK} from "../shared/http-status-codes.constant";
import {LocalStrategy} from "./local-strategy.type";

export type Config = {
    nodeEnv: NodeEnvironmentOption;
    api: WebFrameworkOption,
    title: string,
    version: string;
    port: number,
    corsOptions?: CorsOptions,
    authStrategy: AuthStrategy,
}

export type WebFrameworkOption = "Express" | "Nest" | "Fastify";
export type NodeEnvironmentOption = "production" | "development";
export type AuthStrategy = "None" | LocalStrategy | JWTStrategy;

export type JWTStrategy = {};

export type BuildConfig = (
    nodeEnv: NodeEnvironmentOption,
    api: WebFrameworkOption,
    title: string,
    version: string,
    port: number,
    corsOptions: CorsOptions,
    authStrategy: AuthStrategy,
) => Config;

export const buildConfig: BuildConfig = (
    nodeEnv: NodeEnvironmentOption,
    api: WebFrameworkOption,
    title: string,
    version: string,
    port: number,
    corsOptions: CorsOptions = DEFAULT_CORS_OPTIONS,
    authStrategy: AuthStrategy = "None",
): Config =>
    ({
        nodeEnv: nodeEnv,
        api: api,
        title: title,
        version: version,
        port: port,
        corsOptions: corsOptions,
        authStrategy: authStrategy
    });

export const DEFAULT_CORS_OPTIONS: CorsOptions = {
    origin: [
        '*',
    ],
    optionsSuccessStatus: OK,
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
};
