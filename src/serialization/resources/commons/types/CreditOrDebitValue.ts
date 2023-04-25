/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Apiture } from "@fern-api/apiture";
import * as core from "../../../../core";

export const CreditOrDebitValue: core.serialization.Schema<
    serializers.CreditOrDebitValue.Raw,
    Apiture.CreditOrDebitValue
> = core.serialization.string();

export declare namespace CreditOrDebitValue {
    type Raw = string;
}
