/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the type of a cutoff time. <strong><code>cutoffTimeType</code></strong> strings may have one of the following [enumerated values](https://dx.apiture.com/docs/api-documentation/concepts/label-groups#enumerations): <table> <tr>
 *   <th>Value</th><th>Description</th>
 * </tr> <tr>
 *     <td><strong><code>ach</code></strong></td><td>ACH</td>
 *     </tr>
 * <tr>
 *     <td><strong><code>sameDayAch</code></strong></td><td>Same Day ACH</td>
 *     </tr>
 * <tr>
 *     <td><strong><code>domesticWireTransfer</code></strong></td><td>Domestic Wire Transfer</td>
 *     </tr>
 * <tr>
 *     <td><strong><code>internationalWireTransfer</code></strong></td><td>International Wire Transfer</td>
 *     </tr>
 * <tr>
 *     <td><strong><code>internalTransfer</code></strong></td><td>Internal Account Transfer: <p>A transfer between accounts at the same financial institution</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>externalTransfer</code></strong></td><td>External Account Transfer: <p>A transfer to or from an account at an external financial institution</p>
 * </td>
 *     </tr>
 * <tr>
 *     <td><strong><code>billPay</code></strong></td><td>Bill Pay</td>
 *     </tr>
 * </table>
 *
 */
export type CutoffTimeType =
    | "ach"
    | "sameDayAch"
    | "domesticWireTransfer"
    | "internationalWireTransfer"
    | "internalTransfer"
    | "externalTransfer"
    | "billPay";

export const CutoffTimeType = {
    Ach: "ach",
    SameDayAch: "sameDayAch",
    DomesticWireTransfer: "domesticWireTransfer",
    InternationalWireTransfer: "internationalWireTransfer",
    InternalTransfer: "internalTransfer",
    ExternalTransfer: "externalTransfer",
    BillPay: "billPay",
} as const;