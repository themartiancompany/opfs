[**@themartiancompany/happy-opfs**](../README.md)

***

[@themartiancompany/happy-opfs](../README.md) / remove

# Function: remove()

```ts
function remove(path): AsyncVoidIOResult
```

Defined in: fs/opfs\_core.ts:255

Removes a file or directory at the specified path same as `rm -rf`.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the file or directory to remove. |

## Returns

`AsyncVoidIOResult`

A promise that resolves to an `AsyncIOResult` indicating whether the file or directory was successfully removed.
