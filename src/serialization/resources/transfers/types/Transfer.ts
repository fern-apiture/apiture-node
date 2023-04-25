/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ApitureApi } from "@fern-api/apiture";
import * as core from "../../../../core";

export const Transfer: core.serialization.ObjectSchema<serializers.Transfer.Raw, ApitureApi.Transfer> =
    core.serialization
        .object({})
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).AbstractBody))
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).TransferItem));

export declare namespace Transfer {
    interface Raw extends serializers.AbstractBody.Raw, serializers.TransferItem.Raw {}
}
