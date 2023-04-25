/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Apiture } from "@fern-api/apiture";
import * as core from "../../../../core";

export const TransactionCategoryType: core.serialization.Schema<
    serializers.TransactionCategoryType.Raw,
    Apiture.TransactionCategoryType
> = core.serialization.enum_(["credit", "debit"]);

export declare namespace TransactionCategoryType {
    type Raw = "credit" | "debit";
}
