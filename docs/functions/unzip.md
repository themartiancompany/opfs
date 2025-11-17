[**@themartiancompany/happy-opfs**](../README.md)

***

[@themartiancompany/happy-opfs](../README.md) / unzip

# Function: unzip()

```ts
function unzip(zipFilePath, targetPath): AsyncVoidIOResult
```

Defined in: fs/opfs\_unzip.ts:106

Unzip a zip file to a directory.
Equivalent to `unzip -o <zipFilePath> -d <targetPath>

Usees [fflate](https://github.com/101arrowz/fflate) as the unzip backend.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zipFilePath` | `string` | Zip file path. |
| `targetPath` | `string` | The directory to unzip to. |

## Returns

`AsyncVoidIOResult`

A promise that resolves to an `AsyncIOResult`
         indicating whether the zip file was successfully unzipped.
