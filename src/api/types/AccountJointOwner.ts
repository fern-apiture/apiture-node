/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ApitureBanking from "..";

/**
 * Representation of account joint owner resources.
 */
export interface AccountJointOwner extends ApitureBanking.AbstractBody {
    id: ApitureBanking.ReadOnlyResourceId;
    /** The full name of the joint owner. */
    name: string;
}