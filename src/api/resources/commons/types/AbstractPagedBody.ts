/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { ApitureApi } from "@fern-api/apiture";

/**
 * An abstract schema used to define paginated collections of resources. Collection classes which extend this schema define an array of `items` which represent a page of data.
 */
export interface AbstractPagedBody extends ApitureApi.AbstractBody, ApitureApi.AbstractPagedBodyFields {
    /** The opaque cursor that specifies the starting location of this page of items. */
    start?: string;
}