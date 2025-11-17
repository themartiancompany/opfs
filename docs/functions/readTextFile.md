[**@themartiancompany/opfs**](../README.md)

***

[@themartiancompany/opfs](../README.md) / readTextFile

# Function: readTextFile()

```ts
function readTextFile(filePath): AsyncIOResult<string>
```

Defined in: fs/opfs\_ext.ts:496

Reads the content of a file at the specified path as a string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filePath` | `string` | The path of the file to read. |

## Returns

`AsyncIOResult`\<`string`\>

A promise that resolves to an `AsyncIOResult`
         containing the file content as a string.
