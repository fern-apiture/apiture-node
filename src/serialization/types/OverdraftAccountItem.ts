/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const OverdraftAccountItem: core.serialization.ObjectSchema<
    serializers.OverdraftAccountItem.Raw,
    ApitureBanking.OverdraftAccountItem
> = core.serialization.lazyObject(async () => (await import("..")).OverdraftAccountFields);

export declare namespace OverdraftAccountItem {
    type Raw = serializers.OverdraftAccountFields.Raw;
}
