/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { ApitureApi } from "@fern-api/apiture";
import * as core from "../../../../../core";

export const NewTransfer: core.serialization.Schema<
    serializers.NewTransfer.Raw,
    Omit<ApitureApi.NewTransfer, "challenge">
> = core.serialization
    .object({
        schedule: core.serialization.lazyObject(async () => (await import("../../../..")).TransferSchedule).optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../..")).AbstractBody))
    .extend(core.serialization.lazyObject(async () => (await import("../../../..")).TransferFields));

export declare namespace NewTransfer {
    interface Raw extends serializers.AbstractBody.Raw, serializers.TransferFields.Raw {
        schedule?: serializers.TransferSchedule.Raw | null;
    }
}
