/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors";
import * as ApitureBanking from "..";

export class TooManyRequestsError extends errors.ApitureBankingError {
    constructor(body: ApitureBanking.ProblemResponse) {
        super({
            message: "TooManyRequestsError",
            statusCode: 429,
            body: body,
        });
        Object.setPrototypeOf(this, TooManyRequestsError.prototype);
    }
}