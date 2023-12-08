import {CorsOptions} from "cors";
import {Init, init as initApp, Run, run as runApp} from "./src/app/app";
import {buildConfig as buildAppImpl} from "./src/app/config.utility";
import {appBuilder as appBuilderImpl} from "./src/app/app-builder.utility";

export type HashingAlgorithm =
    'RSA-MD5' |
    'RSA-RIPEMD160' |
    'RSA-SHA1' |
    'RSA-SHA1-2' |
    'RSA-SHA224' |
    'RSA-SHA256' |
    'RSA-SHA3-224' |
    'RSA-SHA3-256' |
    'RSA-SHA3-384' |
    'RSA-SHA3-512' |
    'RSA-SHA384' |
    'RSA-SHA512' |
    'RSA-SHA512/224' |
    'RSA-SHA512/256' |
    'RSA-SM3' |
    'blake2b512' |
    'blake2s256' |
    'id-rsassa-pkcs1-v1_5-with-sha3-224' |
    'id-rsassa-pkcs1-v1_5-with-sha3-256' |
    'id-rsassa-pkcs1-v1_5-with-sha3-384' |
    'id-rsassa-pkcs1-v1_5-with-sha3-512' |
    'md5' |
    'md5-sha1' |
    'md5WithRSAEncryption' |
    'ripemd' |
    'ripemd160' |
    'ripemd160WithRSA' |
    'rmd160' |
    'sha1' |
    'sha1WithRSAEncryption' |
    'sha224' |
    'sha224WithRSAEncryption' |
    'sha256' |
    'sha256WithRSAEncryption' |
    'sha3-224' |
    'sha3-256' |
    'sha3-384' |
    'sha3-512' |
    'sha384' |
    'sha384WithRSAEncryption' |
    'sha512' |
    'sha512-224' |
    'sha512-224WithRSAEncryption' |
    'sha512-256' |
    'sha512-256WithRSAEncryption' |
    'sha512WithRSAEncryption' |
    'shake128' |
    'shake256' |
    'sm3' |
    'sm3WithRSAEncryption' |
    'ssl3-md5' |
    'ssl3-sha1';

const init: Init = initApp;
const run: Run = runApp;
export const App = {
    init: init,
    run: run
};


export type AppBuilder = {
    buildApp: (config: Config, controllers: Controller[]) => AppWrapper,
};


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

export type LocalStrategy = {
    usersDbName: string,
    usersDbOption: DatabaseOption
    usersDbUrl: string,
    sessionSecret: string,
    hashingAlgorithm: HashingAlgorithm,
    hashingIterations: number,
    passwordLength: number
    passwordSalt: string
};

export type DatabaseOption = "MongoDB" | "MySQL" | "GraphQL";

export type BuildConfig = (
    nodeEnv: NodeEnvironmentOption,
    api: WebFrameworkOption,
    title: string,
    version: string,
    port: number,
    corsOptions: CorsOptions,
    authStrategy: AuthStrategy,
) => Config;


export const buildConfig: BuildConfig = buildAppImpl;

export const appBuilder: AppBuilder = appBuilderImpl;

export type AppWrapper = {
    run: () => void,
};

export type Controller = {
    path: string,
    guard: boolean,
    methods: Method[],
};

export type Method = {
    type: MethodType,
    path?: string,
    paramKeys: string[],
    queryParamKeys: string[]
    sideEffects: SideEffect[],
    middleware: RequestHandler[],
    requestHandler: RequestHandler,
};

export type MethodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export type RequestHandler = (dto: Request) => Promise<Response>;

export type SideEffect = (request: Request) => Promise<void>;

export type Request = {
    paramMap?: ParamMap,
    queryParamMap?: ParamMap,
    payload?: Object,
};

export type ParamMap = Record<string, string>;

export type Response = {
    status: number
    error?: string,
    collection?: any[],
    count?: number,
    index?: number,
    limit?: number,
};

export const HttpStatusCodes = {
    OK: number = 200,
    CREATED: number = 201,
    BAD_REQUEST: number = 400,
    UNAUTHORIZED: number = 401,
    FORBIDDEN: number = 403,
    NOT_FOUND: number = 404,
    CONFLICT: number = 409,
    INTERNAL_SERVER_ERROR: number = 500,
};

export const UserRegisteredEvent: string = 'userRegistered';
export const UserLoggedInEvent: string = 'userLoggedIn';
export const UserLoggedOutEvent: string = 'userLoggedOut';
