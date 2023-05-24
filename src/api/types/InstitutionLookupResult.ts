/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ApitureBanking from "..";

/**
 * Successful institution lookup result.
 */
export interface InstitutionLookupResult extends ApitureBanking.AbstractBody {
    /** `true` if a financial institution was found matching the requested FI locator, `false` if none was found. */
    found: boolean;
    institution?: ApitureBanking.SimpleInstitution;
    /** Optional intermediary institutions, if requested and if intermediary institutions are required for for international wire transfers to the beneficiary institution. This array is omitted if there none are required. */
    intermediaryInstitutions?: ApitureBanking.SimpleInstitution[];
}