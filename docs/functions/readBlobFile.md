[**@themartiancompany/opfs**](../README.md)

***

[@themartiancompany/opfs](../README.md) / readBlobFile

# Function: readBlobFile()

```ts
function readBlobFile(filePath): AsyncIOResult<File>
```

Defined in: fs/opfs\_ext.ts:446

Reads the content of a file at the specified path as a File.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filePath` | `string` | The path of the file to read. |

## Returns

`AsyncIOResult`\<`File`\>

A promise that resolves to an `AsyncIOResult`
         containing the file content as a File.
