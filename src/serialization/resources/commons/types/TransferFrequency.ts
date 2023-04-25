/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ApitureApi } from "@fern-api/apiture";
import * as core from "../../../../core";

export const TransferFrequency: core.serialization.Schema<
    serializers.TransferFrequency.Raw,
    ApitureApi.TransferFrequency
> = core.serialization.enum_([
    "once",
    "occasional",
    "daily",
    "weekly",
    "biweekly",
    "semimonthly",
    "monthly",
    "monthlyFirstDay",
    "monthlyLastDay",
    "bimonthly",
    "quarterly",
    "semiyearly",
    "yearly",
]);

export declare namespace TransferFrequency {
    type Raw =
        | "once"
        | "occasional"
        | "daily"
        | "weekly"
        | "biweekly"
        | "semimonthly"
        | "monthly"
        | "monthlyFirstDay"
        | "monthlyLastDay"
        | "bimonthly"
        | "quarterly"
        | "semiyearly"
        | "yearly";
}
