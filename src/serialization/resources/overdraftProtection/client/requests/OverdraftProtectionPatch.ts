/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as ApitureBanking from "../../../../../api";
import * as core from "../../../../../core";

export const OverdraftProtectionPatch: core.serialization.Schema<
    serializers.OverdraftProtectionPatch.Raw,
    ApitureBanking.OverdraftProtectionPatch
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../../..")).AbstractBody))
    .extend(core.serialization.lazyObject(async () => (await import("../../../..")).OverdraftProtectionFields));

export declare namespace OverdraftProtectionPatch {
    interface Raw extends serializers.AbstractBody.Raw, serializers.OverdraftProtectionFields.Raw {}
}
