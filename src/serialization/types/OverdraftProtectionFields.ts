/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const OverdraftProtectionFields: core.serialization.ObjectSchema<
    serializers.OverdraftProtectionFields.Raw,
    ApitureBanking.OverdraftProtectionFields
> = core.serialization.object({
    accounts: core.serialization.unknown().optional(),
});

export declare namespace OverdraftProtectionFields {
    interface Raw {
        accounts?: unknown | null;
    }
}
