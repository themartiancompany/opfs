[**@themartiancompany/opfs**](../README.md)

***

[@themartiancompany/opfs](../README.md) / readJsonFile

# Function: readJsonFile()

```ts
function readJsonFile<T>(filePath): AsyncIOResult<T>
```

Defined in: fs/opfs\_ext.ts:466

Reads the content of a file at the specified path as a
string and returns it as a JSON object.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filePath` | `string` | The path of the file to read. |

## Returns

`AsyncIOResult`\<`T`\>

A promise that resolves to an `AsyncIOResult`
         containing the file content as a JSON object.
