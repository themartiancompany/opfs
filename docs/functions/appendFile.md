[**@themartiancompany/opfs**](../README.md)

***

[@themartiancompany/opfs](../README.md) / appendFile

# Function: appendFile()

```ts
function appendFile(filePath, contents): AsyncVoidIOResult
```

Defined in: fs/opfs\_ext.ts:252

Appends content to a file at the specified path.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filePath` | `string` | The path of the file to append to. |
| `contents` | [`WriteFileContent`](../type-aliases/WriteFileContent.md) | The content to append to the file. |

## Returns

`AsyncVoidIOResult`

A promise that resolves to an `AsyncIOResult`
         indicating whether the content was successfully appended.
