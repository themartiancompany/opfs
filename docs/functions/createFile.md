[**@themartiancompany/opfs**](../README.md)

***

[@themartiancompany/opfs](../README.md) / createFile

# Function: createFile()

```ts
function createFile(filePath): AsyncVoidIOResult
```

Defined in: fs/opfs\_core.ts:56

Creates a new file at the specified path same as `touch`.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filePath` | `string` | The path of the file to create. |

## Returns

`AsyncVoidIOResult`

A promise that resolves to an `AsyncIOResult` indicating whether the file was successfully created.
