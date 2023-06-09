/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const WireTransferInstitution: core.serialization.ObjectSchema<
    serializers.WireTransferInstitution.Raw,
    ApitureBanking.WireTransferInstitution
> = core.serialization
    .object({
        localClearingCode: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).SimpleInstitution));

export declare namespace WireTransferInstitution {
    interface Raw extends serializers.SimpleInstitution.Raw {
        localClearingCode?: string | null;
    }
}
