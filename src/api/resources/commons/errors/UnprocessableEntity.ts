/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import { ApitureApi } from "@fern-api/apiture";

export class UnprocessableEntity extends errors.ApitureApiError {
    constructor(body: ApitureApi.ProblemResponse) {
        super({
            message: "UnprocessableEntity",
            statusCode: 422,
            body: body,
        });
        Object.setPrototypeOf(this, UnprocessableEntity.prototype);
    }
}