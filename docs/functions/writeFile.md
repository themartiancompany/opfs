[**@themartiancompany/opfs**](../README.md)

***

[@themartiancompany/opfs](../README.md) / writeFile

# Function: writeFile()

```ts
function writeFile(
   filePath, 
   contents, 
   options?): AsyncVoidIOResult
```

Defined in: fs/opfs\_core.ts:369

Writes content to a file at the specified path.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filePath` | `string` | The path of the file to write to. |
| `contents` | [`WriteFileContent`](../type-aliases/WriteFileContent.md) | The content to write to the file. |
| `options`? | [`WriteOptions`](../interfaces/WriteOptions.md) | Optional write options. |

## Returns

`AsyncVoidIOResult`

A promise that resolves to an `AsyncIOResult` indicating whether the file was successfully written.
