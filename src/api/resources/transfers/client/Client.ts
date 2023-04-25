/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { ApitureApi } from "@fern-api/apiture";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Transfers {
    interface Options {
        environment: string;
        acessToken: core.Supplier<string>;
        apiKey?: core.Supplier<string | undefined>;
    }
}

export class Transfers {
    constructor(protected readonly options: Transfers.Options) {}

    /**
     * Return a [paginated](https://dx.apiture.com/docs/api-documentation/concepts/pagination) collection of transfers. The [nextPage_url](https://dx.apiture.com/docs/api-documentation/concepts/links) in the response is a pagination link.
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    public async listTransfers(request: ApitureApi.ListTransfersRequest = {}): Promise<ApitureApi.Transfers> {
        const { scheduledOn, debitsOn, creditsOn, historical, start, limit } = request;
        const _queryParams = new URLSearchParams();
        if (scheduledOn != null) {
            _queryParams.append("scheduledOn", scheduledOn);
        }

        if (debitsOn != null) {
            _queryParams.append("debitsOn", debitsOn);
        }

        if (creditsOn != null) {
            _queryParams.append("creditsOn", creditsOn);
        }

        if (historical != null) {
            _queryParams.append("historical", historical.toString());
        }

        if (start != null) {
            _queryParams.append("start", start);
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/transfers"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.Transfers.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ApitureApi.BadRequest(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new ApitureApi.Unauthorized(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new ApitureApi.Forbidden(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 422:
                    throw new ApitureApi.UnprocessableEntity(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.ApitureApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureApiTimeoutError();
            case "unknown":
                throw new errors.ApitureApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a new transfer within the transfers collection. If all the necessary properties are set, the transfer is queued for processing. If the request omits the `schedule.scheduledOn` date, the transfer remains pending/unscheduled until the user sets it via the [`patchTransfer`](#op-patchTransfer) operation. Note: This operation requires an identity challenge if the financial institution requires the user to proove their identity for some types of transfers. See the "Challenges API".
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    public async createTransfer(request: ApitureApi.NewTransfer = {}): Promise<void> {
        const { challenge, ..._body } = request;
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/transfers"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
                Challenge: challenge,
            },
            contentType: "application/json",
            body: await serializers.NewTransfer.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ApitureApi.BadRequest(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new ApitureApi.Unauthorized(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new ApitureApi.Forbidden(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 422:
                    throw new ApitureApi.UnprocessableEntity(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.ApitureApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureApiTimeoutError();
            case "unknown":
                throw new errors.ApitureApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Return the JSON representation of this transfer resource.
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     */
    public async getTransfer(transferId: string): Promise<ApitureApi.Transfer> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/transfers/${transferId}`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.Transfer.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new ApitureApi.Unauthorized(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new ApitureApi.Forbidden(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new ApitureApi.NotFound(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.ApitureApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureApiTimeoutError();
            case "unknown":
                throw new errors.ApitureApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete this transfer resource and any resources that are owned by it. Only transfers that have not been processed may be deleted.
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.NotFound}
     */
    public async deleteTransfer(transferId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/transfers/${transferId}`),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ApitureApi.BadRequest(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new ApitureApi.Unauthorized(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new ApitureApi.NotFound(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.ApitureApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureApiTimeoutError();
            case "unknown":
                throw new errors.ApitureApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Perform a partial update of this transfer as per [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7396) format and processing rules. Only fields in the request body are updated on the resource; fields which are omitted are not updated. Note: This operation requires an identity challenge if the financial institution requires the user to prove their identity for some types of transfers. See the "Challenges API".
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    public async patchTransfer(
        transferId: string,
        request: ApitureApi.TransferPatch = {}
    ): Promise<ApitureApi.Transfer> {
        const { challenge, ..._body } = request;
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/transfers/${transferId}`),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
                Challenge: challenge,
            },
            contentType: "application/json",
            body: await serializers.TransferPatch.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.Transfer.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ApitureApi.BadRequest(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new ApitureApi.Unauthorized(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new ApitureApi.Forbidden(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new ApitureApi.NotFound(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 422:
                    throw new ApitureApi.UnprocessableEntity(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.ApitureApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureApiTimeoutError();
            case "unknown":
                throw new errors.ApitureApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const value = await core.Supplier.get(this.options.acessToken);
        if (value != null) {
            return `Bearer ${value}`;
        }

        return undefined;
    }
}