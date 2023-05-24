/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const OverdraftProtection: core.serialization.ObjectSchema<
    serializers.OverdraftProtection.Raw,
    ApitureBanking.OverdraftProtection
> = core.serialization
    .object({
        maximumOverdraftAccounts: core.serialization.number(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).AbstractBody))
    .extend(core.serialization.lazyObject(async () => (await import("..")).OverdraftProtectionFields));

export declare namespace OverdraftProtection {
    interface Raw extends serializers.AbstractBody.Raw, serializers.OverdraftProtectionFields.Raw {
        maximumOverdraftAccounts: number;
    }
}