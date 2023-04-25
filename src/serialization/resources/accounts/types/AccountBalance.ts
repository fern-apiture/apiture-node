/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ApitureApi } from "@fern-api/apiture";
import * as core from "../../../../core";

export const AccountBalance: core.serialization.ObjectSchema<
    serializers.AccountBalance.Raw,
    ApitureApi.AccountBalance
> = core.serialization.object({
    id: core.serialization.lazy(async () => (await import("../../..")).ReadOnlyResourceId),
    available: core.serialization.lazy(async () => (await import("../../..")).CreditOrDebitValue).optional(),
    current: core.serialization.lazy(async () => (await import("../../..")).CreditOrDebitValue).optional(),
    updatedAt: core.serialization.lazy(async () => (await import("../../..")).ReadOnlyTimestamp).optional(),
    currentWithPending: core.serialization.lazy(async () => (await import("../../..")).CreditOrDebitValue).optional(),
    incomplete: core.serialization.boolean(),
});

export declare namespace AccountBalance {
    interface Raw {
        id: serializers.ReadOnlyResourceId.Raw;
        available?: serializers.CreditOrDebitValue.Raw | null;
        current?: serializers.CreditOrDebitValue.Raw | null;
        updatedAt?: serializers.ReadOnlyTimestamp.Raw | null;
        currentWithPending?: serializers.CreditOrDebitValue.Raw | null;
        incomplete: boolean;
    }
}
