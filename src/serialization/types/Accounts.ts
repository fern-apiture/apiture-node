/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const Accounts: core.serialization.ObjectSchema<serializers.Accounts.Raw, ApitureBanking.Accounts> =
    core.serialization.object({
        items: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).AccountItem)),
        count: core.serialization.number().optional(),
        primaryAccountId: core.serialization.lazy(async () => (await import("..")).ReadOnlyResourceId).optional(),
        nextPageUrl: core.serialization.property("nextPage_url", core.serialization.string().optional()),
        start: core.serialization.string().optional(),
        limit: core.serialization.number(),
    });

export declare namespace Accounts {
    interface Raw {
        items: serializers.AccountItem.Raw[];
        count?: number | null;
        primaryAccountId?: serializers.ReadOnlyResourceId.Raw | null;
        nextPage_url?: string | null;
        start?: string | null;
        limit: number;
    }
}