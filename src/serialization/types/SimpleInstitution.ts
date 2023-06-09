/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const SimpleInstitution: core.serialization.ObjectSchema<
    serializers.SimpleInstitution.Raw,
    ApitureBanking.SimpleInstitution
> = core.serialization.object({
    name: core.serialization.string(),
    address: core.serialization.lazyObject(async () => (await import("..")).Address),
    locator: core.serialization.string(),
    locatorType: core.serialization.lazy(async () => (await import("..")).InstitutionLocatorType),
});

export declare namespace SimpleInstitution {
    interface Raw {
        name: string;
        address: serializers.Address.Raw;
        locator: string;
        locatorType: serializers.InstitutionLocatorType.Raw;
    }
}
