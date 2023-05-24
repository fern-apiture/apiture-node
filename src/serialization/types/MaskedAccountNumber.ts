/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const MaskedAccountNumber: core.serialization.Schema<
    serializers.MaskedAccountNumber.Raw,
    ApitureBanking.MaskedAccountNumber
> = core.serialization.string();

export declare namespace MaskedAccountNumber {
    type Raw = string;
}