/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ApitureApi } from "@fern-api/apiture";
import * as core from "../../../../core";

export const TransferDateRestrictions: core.serialization.ObjectSchema<
    serializers.TransferDateRestrictions.Raw,
    ApitureApi.TransferDateRestrictions
> = core.serialization
    .object({
        restrictedDates: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).TransferDateRestriction))
            .optional(),
        accuracyEndsOn: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).AbstractBody));

export declare namespace TransferDateRestrictions {
    interface Raw extends serializers.AbstractBody.Raw {
        restrictedDates?: serializers.TransferDateRestriction.Raw[] | null;
        accuracyEndsOn?: string | null;
    }
}
