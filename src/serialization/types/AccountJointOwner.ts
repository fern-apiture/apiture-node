/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const AccountJointOwner: core.serialization.ObjectSchema<
    serializers.AccountJointOwner.Raw,
    ApitureBanking.AccountJointOwner
> = core.serialization
    .object({
        id: core.serialization.lazy(async () => (await import("..")).ReadOnlyResourceId),
        name: core.serialization.string(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).AbstractBody));

export declare namespace AccountJointOwner {
    interface Raw extends serializers.AbstractBody.Raw {
        id: serializers.ReadOnlyResourceId.Raw;
        name: string;
    }
}