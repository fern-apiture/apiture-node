/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const AmountRange: core.serialization.Schema<serializers.AmountRange.Raw, ApitureBanking.AmountRange> =
    core.serialization.string();

export declare namespace AmountRange {
    type Raw = string;
}