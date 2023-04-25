/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ListTransactionCategoriesRequest {
    /**
     * The entity tag that was returned in the `ETag` response header of a previous call. If the resource's current entity tag value matches this header value, the `GET` will return 304 (Not Modified) and no response body, else the current resource representation and updated `ETag` is returned.
     */
    ifNoneMatch?: string;
}
