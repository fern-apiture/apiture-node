/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const TransactionItem: core.serialization.ObjectSchema<
    serializers.TransactionItem.Raw,
    ApitureBanking.TransactionItem
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("..")).AbstractBody))
    .extend(core.serialization.lazyObject(async () => (await import("..")).TransactionFields));

export declare namespace TransactionItem {
    interface Raw extends serializers.AbstractBody.Raw, serializers.TransactionFields.Raw {}
}
