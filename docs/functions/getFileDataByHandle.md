[**@themartiancompany/happy-opfs**](../README.md)

***

[@themartiancompany/happy-opfs](../README.md) / getFileDataByHandle

# Function: getFileDataByHandle()

```ts
function getFileDataByHandle(handle): Promise<Uint8Array<ArrayBufferLike>>
```

Defined in: fs/utils.ts:164

Gets the data of a file handle.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle` | `FileSystemFileHandle` | The file handle. |

## Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

A promise that resolves to the data of the file.
