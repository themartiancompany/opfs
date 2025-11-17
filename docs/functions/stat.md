[**@themartiancompany/opfs**](../README.md)

***

[@themartiancompany/opfs](../README.md) / stat

# Function: stat()

```ts
function stat(path): AsyncIOResult<FileSystemHandle>
```

Defined in: fs/opfs\_core.ts:316

Retrieves the status of a file or directory at the specified path.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the file or directory to retrieve status for. |

## Returns

`AsyncIOResult`\<`FileSystemHandle`\>

A promise that resolves to an `AsyncIOResult` containing the `FileSystemHandle`.
