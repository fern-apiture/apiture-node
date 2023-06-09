/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const IncompleteTransactions: core.serialization.ObjectSchema<
    serializers.IncompleteTransactions.Raw,
    ApitureBanking.IncompleteTransactions
> = core.serialization
    .object({
        retryCount: core.serialization.number(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).AbstractBody));

export declare namespace IncompleteTransactions {
    interface Raw extends serializers.AbstractBody.Raw {
        retryCount: number;
    }
}
