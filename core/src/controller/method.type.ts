import {SideEffect} from "./side-effect.type";
import {Response} from "../shared/response.type";
import {Request} from "../shared/request.type";

export type Method = {
    type: MethodType,
    path?: string,
    paramKeys: string[],
    queryParamKeys: string[]
    sideEffects: SideEffect[],
    done: MethodCallback,
};

export type MethodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export type MethodCallback = (dto: Request) => Promise<Response>;

