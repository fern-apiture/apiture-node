/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Apiture } from "@fern-api/apiture";
import * as core from "../../../../core";

export const AccountBalances: core.serialization.ObjectSchema<
    serializers.AccountBalances.Raw,
    Apiture.AccountBalances
> = core.serialization
    .object({
        items: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).AccountBalance)
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).AbstractBody));

export declare namespace AccountBalances {
    interface Raw extends serializers.AbstractBody.Raw {
        items: serializers.AccountBalance.Raw[];
    }
}
