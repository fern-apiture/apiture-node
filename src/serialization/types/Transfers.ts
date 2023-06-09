/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const Transfers: core.serialization.ObjectSchema<serializers.Transfers.Raw, ApitureBanking.Transfers> =
    core.serialization
        .object({
            items: core.serialization.list(
                core.serialization.lazyObject(async () => (await import("..")).TransferItem)
            ),
            count: core.serialization.number().optional(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("..")).AbstractPagedBody));

export declare namespace Transfers {
    interface Raw extends serializers.AbstractPagedBody.Raw {
        items: serializers.TransferItem.Raw[];
        count?: number | null;
    }
}
