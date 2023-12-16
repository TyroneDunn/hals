import {Application} from "./application.type";
import {Schema} from "./schema.type";
import {Controller} from "./controller.type";
import {validateAppSchema} from "./app-validator.service";
import {ValidationOutcome} from "../shared/validation-outcome.type";
import {throwErrors} from "../shared/error-handler.service";
import {appBuilder} from "./app-builder.utility";

export type InitialiseApplication = (
    config: Schema,
    controllers: Controller[]
) => Application;

export const newApplication: InitialiseApplication = (
    config: Schema,
    controllers: Controller[] = []
): Application => {
    const validationOutcome: ValidationOutcome = validateAppSchema(config);
    if (validationOutcome.errors.length)
        throwErrors(validationOutcome.errors.map(error => new Error(error.message)));
    return appBuilder.buildApp(config, controllers);
};