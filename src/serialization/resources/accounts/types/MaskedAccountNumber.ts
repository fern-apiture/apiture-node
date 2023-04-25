/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ApitureApi } from "@fern-api/apiture";
import * as core from "../../../../core";

export const MaskedAccountNumber: core.serialization.Schema<
    serializers.MaskedAccountNumber.Raw,
    ApitureApi.MaskedAccountNumber
> = core.serialization.string();

export declare namespace MaskedAccountNumber {
    type Raw = string;
}