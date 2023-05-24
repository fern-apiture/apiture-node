/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const TransactionCategories: core.serialization.ObjectSchema<
    serializers.TransactionCategories.Raw,
    ApitureBanking.TransactionCategories
> = core.serialization.object({
    items: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).TransactionCategory)),
});

export declare namespace TransactionCategories {
    interface Raw {
        items: serializers.TransactionCategory.Raw[];
    }
}