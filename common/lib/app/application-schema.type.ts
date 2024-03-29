import { CorsOptions } from "../cors/cors-options.type";
import { AuthStrategy } from "../auth/auth-strategy.type";
import { Controller } from './controller.type';

export type ApplicationSchema =
   | RestApplicationSchema
   | WebSocketApplicationSchema;

export type RestApplicationSchema = {
   title        : string,
   version      : string;
   host         : LocalHost | HostAddress,
   port         : number,
   nodeEnv      : NodeEnvironmentOption;
   serverOption : ServerFrameworkOption,
   corsOptions  : CorsOptions,
   authStrategy : AuthStrategy,
   controllers  : Controller[],
};

export type LocalHost = '127.0.0.1';

export type HostAddress = string;

export type NodeEnvironmentOption =
   | "production"
   | "development";

export type ServerFrameworkOption =
   | "Express"

export type WebSocketApplicationSchema = {
   title         : string,
   version       : string;
   host          : LocalHost | HostAddress,
   port          : number,
   nodeEnv       : NodeEnvironmentOption;
   serverOption  : ServerFrameworkOption,
   corsOptions   : CorsOptions,
   authStrategy  : AuthStrategy,
   socketEvents  : SocketEvents,
   controllers   : Controller[],
};

export type SocketEvents = {
   onConnection?: () => void,
   onClose?: () => void,
   onEvent?: () => void,
};
