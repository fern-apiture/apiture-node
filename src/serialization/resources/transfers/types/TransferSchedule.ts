/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ApitureApi } from "@fern-api/apiture";
import * as core from "../../../../core";

export const TransferSchedule: core.serialization.ObjectSchema<
    serializers.TransferSchedule.Raw,
    ApitureApi.TransferSchedule
> = core.serialization.object({
    scheduledOn: core.serialization.string().optional(),
    recurrenceType: core.serialization.lazy(async () => (await import("../../..")).TransferRecurrenceType).optional(),
    frequency: core.serialization.lazy(async () => (await import("../../..")).TransferFrequency),
    endsOn: core.serialization.string().optional(),
    count: core.serialization.number().optional(),
    amountLimit: core.serialization.lazy(async () => (await import("../../..")).MonetaryValue).optional(),
});

export declare namespace TransferSchedule {
    interface Raw {
        scheduledOn?: string | null;
        recurrenceType?: serializers.TransferRecurrenceType.Raw | null;
        frequency: serializers.TransferFrequency.Raw;
        endsOn?: string | null;
        count?: number | null;
        amountLimit?: serializers.MonetaryValue.Raw | null;
    }
}
