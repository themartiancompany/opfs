[**@themartiancompany/happy-opfs**](../README.md)

***

[@themartiancompany/happy-opfs](../README.md) / emptyDir

# Function: emptyDir()

```ts
function emptyDir(dirPath): AsyncVoidIOResult
```

Defined in: fs/opfs\_ext.ts:315

Empties the contents of a directory at the specified path.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dirPath` | `string` | The path of the directory to empty. |

## Returns

`AsyncVoidIOResult`

A promise that resolves to an `AsyncIOResult`
         indicating whether the directory was successfully emptied.
