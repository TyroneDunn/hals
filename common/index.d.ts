import { Application as ApplicationType } from "./lib/app/application.type";
import {
   ApplicationSchema as ApplicationSchemaType,
   HostAddress as HostAddressType,
   LocalHost as LocalHostType,
   NodeEnvironmentOption as NodeEnvironmentOptionType,
   RestApplicationSchema as RestApplicationSchemaType,
   SocketEvents as SocketEventsType,
   WebSocketApplicationSchema as WebSocketApplicationSchemaType,
} from "./lib/app/application-schema.type";
import { AuthStrategy as AuthStrategyType } from "./lib/auth/auth-strategy.type";
import {
   CommandResult as CommandResultImpl,
   CommandResult as CommandResultType,
} from "./lib/command-result/command-result.type";
import { Controller as ControllerType } from "./lib/app/controller.type";
import {
   CorsOptions as CorsOptionsType,
   CustomOrigin as CustomOriginType,
   StaticOrigin as StaticOriginType,
} from "./lib/cors/cors-options.type";
import { DateRange as DateRangeType } from "./lib/timestamps/date-range.type";
import {
   Error as ErrorImpl,
   Error as Error_Type,
   ErrorType as ErrorType_Type,
} from "./lib/error/error.type";
import {
   GenerateSalt as GenerateSaltType,
   GenerateSalt as GenerateSaltImpl,
   HashUtility as HashUtilityType,
   HashUtility as HashUtilityImpl,
} from "./lib/password/password.type";
import { HashAlgorithm as HashAlgorithmType } from "./lib/auth/hash-algorithm.type";
import { JwtStrategy as JwtStrategyType } from "./lib/auth/jwt-strategy.type";
import { LocalStrategy as LocalStrategyType } from "./lib/auth/local-strategy.type";
import { Method as Method_Type, MethodType as MethodType_Type } from "./lib/app/method.type";
import { NumberRange as NumberRangeType } from "./lib/number-range/number-range.type";
import { OrderOption as OrderOptionType } from "./lib/order/order-option.type";
import { Request as RequestType } from "./lib/app/request.type";
import { Respnse as ResponseType } from "./lib/app/response.type";
import { SideEffect as SideEffectType } from "./lib/app/side-effect.type";
import { Timestamps as TimestampsType } from "./lib/timestamps/timestamps.type";
import { RequestHandler as RequestHandlerType } from "./lib/app/request-handler.type";
import { Page as PageType } from "./lib/page/page.type";
import { ParamMap as ParamMapType } from "./lib/app/param-map.type";
import { User as UserType } from "./lib/users/user.type";
import {
   ValidationError as ValidationErrorImpl,
   ValidationError as ValidationErrorType,
} from "./lib/validation-error/validation-error.type";
import {
   BAD_REQUEST as BAD_REQUESTconst,
   CONFLICT as CONFLICTconst,
   CREATED as CREATEDconst,
   FORBIDDEN as FORBIDDENconst,
   INTERNAL_SERVER_ERROR as INTERNAL_SERVER_ERRORconst,
   NOT_FOUND as NOT_FOUNDconst,
   OK as OKconst,
   UNAUTHORIZED as UNAUTHORIZEDconst,
} from "./lib/http/http-status-codes.constant";

import { handleRequest as handleRequestImpl } from "./lib/utilities/handle-request.utility";
import { isLocalStrategy as isLocalStrategyImpl } from "./lib/auth/local-strategy.utility";
import {
   isValidationError as isValidationErrorImpl,
} from "./lib/validation-error/validation-error.utility";
import { isError as isErrorImpl } from "./lib/error/error.utility";
import {
   mapErrorToInternalServerErrorResponse as mapErrorToInternalServerErrorResponseImpl,
} from './lib/utilities/mapErrorToInternalServerErrorResponse.utility';
import {
   addPageDataToResponse as addPageDataToResponseImpl,
} from './lib/utilities/add-page-data-to-response.utility';
import {
   mapCommandResultToSuccessResponse as mapCommandResultToSuccessResponseImpl,
} from './lib/utilities/map-command-result-to-success-response.utility';
import {
   mapUpdateResultToResponse as mapUpdateResultToResponseImpl,
} from './lib/utilities/map-update-result-to-response.utility';
import {
   mapDeleteResultToResponse as mapDeleteResultToResponseImpl,
} from './lib/utilities/map-delete-result-to-response-utility';
import {
   mapRequestToPage as mapRequestToPageImpl,
} from './lib/utilities/map-request-to-page.utility';
import {
   mapRequestToTimestamps as mapRequestToTimestampsImpl,
} from './lib/utilities/map-request-to-timestamps.utility';
import {
   mapValidationErrorToErrorResponse as mapValidationErrorToErrorResponseImpl,
} from './lib/utilities/map-validation-error-to-error-response.utility';
import {
   isRestApplicationSchema as isRestApplicationSchemaImpl,
   isWebSocketApplicationSchema as isWebSocketApplicationSchemaImpl,
} from './lib/app/application-schema.utility';

export type Application = ApplicationType;
export type ApplicationSchema = ApplicationSchemaType;
export type RestApplicationSchema = RestApplicationSchemaType;
export type WebSocketApplicationSchema = WebSocketApplicationSchemaType;
export type NodeEnvironmentOption = NodeEnvironmentOptionType;
export type LocalHost = LocalHostType;
export type HostAddress = HostAddressType;
export type SocketEvents = SocketEventsType;
export type AuthStrategy = AuthStrategyType;
export type CommandResult = CommandResultType;
export type Controller = ControllerType;
export type CorsOptions = CorsOptionsType;
export type CustomOrigin = CustomOriginType;
export type StaticOrigin = StaticOriginType;
export type DateRange = DateRangeType;
export type Error = Error_Type;
export type ErrorType = ErrorType_Type;
export type GenerateSalt = GenerateSaltType;
export type HashAlgorithm = HashAlgorithmType;
export type HashUtility = HashUtilityType;
export type JwtStrategy = JwtStrategyType;
export type LocalStrategy = LocalStrategyType;
export type Method = Method_Type;
export type MethodType = MethodType_Type;
export type NumberRange = NumberRangeType;
export type OrderOption = OrderOptionType;
export type Request = RequestType;
export type Response = ResponseType;
export type RequestHandler = RequestHandlerType;
export type SideEffect = SideEffectType;
export type Timestamps = TimestampsType;
export type Page = PageType;
export type ParamMap = ParamMapType;
export type User = UserType;
export type ValidationError = ValidationErrorType;

export const OK : number = OKconst;
export const CREATED : number = CREATEDconst;
export const BAD_REQUEST : number = BAD_REQUESTconst;
export const UNAUTHORIZED : number = UNAUTHORIZEDconst;
export const FORBIDDEN : number = FORBIDDENconst;
export const NOT_FOUND : number = NOT_FOUNDconst;
export const CONFLICT : number = CONFLICTconst;
export const INTERNAL_SERVER_ERROR : number = INTERNAL_SERVER_ERRORconst;


export const addPageDataToResponse = addPageDataToResponseImpl;
export const CommandResult = CommandResultImpl;
export const HashUtility = HashUtilityImpl;
export const Error = ErrorImpl;
export const GenerateSalt = GenerateSaltImpl;
export const handleRequest = handleRequestImpl;
export const isRestApplicationSchema = isRestApplicationSchemaImpl;
export const isWebSocketApplicationSchema = isWebSocketApplicationSchemaImpl;
export const isError = isErrorImpl;
export const isLocalStrategy = isLocalStrategyImpl;
export const isValidationError = isValidationErrorImpl;
export const mapCommandResultToSuccessResponse = mapCommandResultToSuccessResponseImpl;
export const mapDeleteResultToResponse = mapDeleteResultToResponseImpl;
export const mapErrorToInternalServerErrorResponse = mapErrorToInternalServerErrorResponseImpl;
export const mapRequestToPage = mapRequestToPageImpl;
export const mapRequestToTimestamps = mapRequestToTimestampsImpl;
export const mapUpdateResultToResponse = mapUpdateResultToResponseImpl;
export const mapValidationErrorToErrorResponse = mapValidationErrorToErrorResponseImpl;
export const ValidationError = ValidationErrorImpl;
