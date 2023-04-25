/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Apiture } from "@fern-api/apiture";
import * as core from "../../../../core";

export const TransferSchedules: core.serialization.ObjectSchema<
    serializers.TransferSchedules.Raw,
    Apiture.TransferSchedules
> = core.serialization
    .object({
        items: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).TransferScheduleItem)
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).AbstractBody));

export declare namespace TransferSchedules {
    interface Raw extends serializers.AbstractBody.Raw {
        items: serializers.TransferScheduleItem.Raw[];
    }
}
