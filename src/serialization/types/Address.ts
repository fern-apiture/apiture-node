/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const Address: core.serialization.ObjectSchema<serializers.Address.Raw, ApitureBanking.Address> =
    core.serialization
        .object({
            regionName: core.serialization.string().optional(),
            regionCode: core.serialization.string().optional(),
            postalCode: core.serialization.string(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("..")).AddressFields));

export declare namespace Address {
    interface Raw extends serializers.AddressFields.Raw {
        regionName?: string | null;
        regionCode?: string | null;
        postalCode: string;
    }
}
