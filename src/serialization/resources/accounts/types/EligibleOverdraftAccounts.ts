/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ApitureApi } from "@fern-api/apiture";
import * as core from "../../../../core";

export const EligibleOverdraftAccounts: core.serialization.ObjectSchema<
    serializers.EligibleOverdraftAccounts.Raw,
    ApitureApi.EligibleOverdraftAccounts
> = core.serialization
    .object({
        items: core.serialization.unknown(),
        maximumOverdraftAccounts: core.serialization.number(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).AbstractPagedBody));

export declare namespace EligibleOverdraftAccounts {
    interface Raw extends serializers.AbstractPagedBody.Raw {
        items?: unknown;
        maximumOverdraftAccounts: number;
    }
}