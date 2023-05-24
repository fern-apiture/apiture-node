/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const TransferState: core.serialization.Schema<serializers.TransferState.Raw, ApitureBanking.TransferState> =
    core.serialization.enum_([
        "unscheduled",
        "pendingApproval",
        "scheduled",
        "processing",
        "processed",
        "failed",
        "other",
    ]);

export declare namespace TransferState {
    type Raw = "unscheduled" | "pendingApproval" | "scheduled" | "processing" | "processed" | "failed" | "other";
}