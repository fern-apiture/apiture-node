/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ApitureApi } from "@fern-api/apiture";
import * as core from "../../../../core";

export const PositiveIntegerRange: core.serialization.Schema<
    serializers.PositiveIntegerRange.Raw,
    ApitureApi.PositiveIntegerRange
> = core.serialization.string();

export declare namespace PositiveIntegerRange {
    type Raw = string;
}
