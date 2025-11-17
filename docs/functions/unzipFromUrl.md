[**@themartiancompany/opfs**](../README.md)

***

[@themartiancompany/opfs](../README.md) / unzipFromUrl

# Function: unzipFromUrl()

```ts
function unzipFromUrl(
   zipFileUrl, 
   targetPath, 
   requestInit?): AsyncVoidIOResult
```

Defined in: fs/opfs\_unzip.ts:139

Unzip a remote zip file to a directory.
Equivalent to `unzip -o <zipFilePath> -d <targetPath>

Use [fflate](https://github.com/101arrowz/fflate) as the unzip backend.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zipFileUrl` | `string` | Zip file url. |
| `targetPath` | `string` | The directory to unzip to. |
| `requestInit`? | [`FsRequestInit`](../type-aliases/FsRequestInit.md) | Optional request initialization parameters. |

## Returns

`AsyncVoidIOResult`

A promise that resolves to an `AsyncIOResult`
         indicating whether the zip file was successfully unzipped.
