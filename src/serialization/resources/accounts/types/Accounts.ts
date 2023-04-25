/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ApitureApi } from "@fern-api/apiture";
import * as core from "../../../../core";

export const Accounts: core.serialization.ObjectSchema<serializers.Accounts.Raw, ApitureApi.Accounts> =
    core.serialization
        .object({
            items: core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../..")).AccountItem)
            ),
            count: core.serialization.number().optional(),
            primaryAccountId: core.serialization
                .lazy(async () => (await import("../../..")).ReadOnlyResourceId)
                .optional(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).AbstractPagedBody));

export declare namespace Accounts {
    interface Raw extends serializers.AbstractPagedBody.Raw {
        items: serializers.AccountItem.Raw[];
        count?: number | null;
        primaryAccountId?: serializers.ReadOnlyResourceId.Raw | null;
    }
}
