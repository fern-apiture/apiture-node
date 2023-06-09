# Apiture Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/apiture)](https://www.npmjs.com/package/@fern-api/apiture)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The Apiture Node.js library provides access to the Apiture API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://developer.apiture.com/docs/apis/banking/index.html#authentication).

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-n2eqby?file=app.ts)

```typescript
const apiture = new ApitureBankingClient({
  acessToken: 'my-access-token',
  apiKey: 'my-api-key', // optional
});

const account = await apiture.accounts.getAccount('accountId');

console.log(account.maskedNumber);
```

## Handling errors

When the API returns a non-success status code (4xx or 5xx response), a subclass of [ApitureError](https://github.com/fern-apiture/apiture-node/blob/main/src/errors/ApitureError.ts) will be thrown:

```ts
try {
   await apiture.accounts.getAccount('accountId');
} catch (err) {
  if (err instanceof ApitureError) {
    console.log(err.statusCode);
    console.log(err.message);
    console.log(err.body);
  }
}
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
