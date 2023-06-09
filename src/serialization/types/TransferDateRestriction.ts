/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const TransferDateRestriction: core.serialization.ObjectSchema<
    serializers.TransferDateRestriction.Raw,
    ApitureBanking.TransferDateRestriction
> = core.serialization.object({
    occursOn: core.serialization.string(),
    reason: core.serialization.lazy(async () => (await import("..")).TransferDateRestrictionType),
    creditOn: core.serialization.string().optional(),
    debitOn: core.serialization.string().optional(),
});

export declare namespace TransferDateRestriction {
    interface Raw {
        occursOn: string;
        reason: serializers.TransferDateRestrictionType.Raw;
        creditOn?: string | null;
        debitOn?: string | null;
    }
}
