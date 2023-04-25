/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import { ApitureApi } from "@fern-api/apiture";

export class TooManyRequests extends errors.ApitureApiError {
    constructor(body: ApitureApi.ProblemResponse) {
        super({
            message: "TooManyRequests",
            statusCode: 429,
            body: body,
        });
        Object.setPrototypeOf(this, TooManyRequests.prototype);
    }
}
