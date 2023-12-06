import {CorsOptions} from "cors";
import {LocalStrategy} from "./local-strategy.type";
import {JWTStrategy} from "./jwt-strategy.type";

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

