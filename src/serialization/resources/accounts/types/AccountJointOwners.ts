/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ApitureApi } from "@fern-api/apiture";
import * as core from "../../../../core";

export const AccountJointOwners: core.serialization.ObjectSchema<
    serializers.AccountJointOwners.Raw,
    ApitureApi.AccountJointOwners
> = core.serialization.object({
    items: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).AccountJointOwner)
    ),
});

export declare namespace AccountJointOwners {
    interface Raw {
        items: serializers.AccountJointOwner.Raw[];
    }
}
