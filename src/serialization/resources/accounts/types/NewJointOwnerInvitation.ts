/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Apiture } from "@fern-api/apiture";
import * as core from "../../../../core";

export const NewJointOwnerInvitation: core.serialization.ObjectSchema<
    serializers.NewJointOwnerInvitation.Raw,
    Apiture.NewJointOwnerInvitation
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).AbstractBody))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).JointOwnerInvitationFields));

export declare namespace NewJointOwnerInvitation {
    interface Raw extends serializers.AbstractBody.Raw, serializers.JointOwnerInvitationFields.Raw {}
}
