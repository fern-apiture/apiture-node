/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const ProblemResponse: core.serialization.ObjectSchema<
    serializers.ProblemResponse.Raw,
    ApitureBanking.ProblemResponse
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("..")).AbstractBody))
    .extend(core.serialization.lazyObject(async () => (await import("..")).ApiProblem));

export declare namespace ProblemResponse {
    interface Raw extends serializers.AbstractBody.Raw, serializers.ApiProblem.Raw {}
}