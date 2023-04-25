/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ApitureApi } from "@fern-api/apiture";
import * as core from "../../../../core";

export const TransferDateRestriction: core.serialization.ObjectSchema<
    serializers.TransferDateRestriction.Raw,
    ApitureApi.TransferDateRestriction
> = core.serialization.object({
    occursOn: core.serialization.string(),
    reason: core.serialization.lazy(async () => (await import("../../..")).TransferDateRestrictionType),
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
