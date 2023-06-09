/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The method used to verify the customer has access to the external account.
 *
 * <strong><code>externalAccountVerificationMethod</code></strong> strings may have one of the following
 * [enumerated values](https://dx.apiture.com/docs/api-documentation/concepts/label-groups#enumerations):
 *
 * <table>
 * <tr>
 *   <th>Value</th><th>Description</th>
 * </tr>
 *
 * <tr>
 *     <td><strong><code>instant</code></strong></td><td>Instant Account Verification: <p>Access to the external account is verified via integration with an account verification service provider.</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>microDeposits</code></strong></td><td>Micro-Deposits: <p>Access to the external account is verified via verifying a set of micro-deposits.</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>manual</code></strong></td><td>Manual: <p>Access to the external account is verified manually by the financial institution.</p>
 * </td>
 *     </tr>
 * </table>
 *
 *
 */
export type ExternalAccountVerificationMethod = "instant" | "microDeposits" | "manual";

export const ExternalAccountVerificationMethod = {
    Instant: "instant",
    MicroDeposits: "microDeposits",
    Manual: "manual",
} as const;
