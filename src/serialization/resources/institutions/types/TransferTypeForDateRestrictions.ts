/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Apiture } from "@fern-api/apiture";
import * as core from "../../../../core";

export const TransferTypeForDateRestrictions: core.serialization.Schema<
    serializers.TransferTypeForDateRestrictions.Raw,
    Apiture.TransferTypeForDateRestrictions
> = core.serialization.enum_([
    "internal",
    "ach",
    "achDebit",
    "achCredit",
    "domesticWireTransfer",
    "internationalWireTransfer",
]);

export declare namespace TransferTypeForDateRestrictions {
    type Raw = "internal" | "ach" | "achDebit" | "achCredit" | "domesticWireTransfer" | "internationalWireTransfer";
}
