[**@themartiancompany/happy-opfs**](../README.md)

***

[@themartiancompany/happy-opfs](../README.md) / move

# Function: move()

```ts
function move(
   srcPath, 
   destPath, 
   options?): AsyncVoidIOResult
```

Defined in: fs/opfs\_ext.ts:412

Move a file or directory from an old path to a new path.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `srcPath` | `string` | The current path of the file or directory. |
| `destPath` | `string` | The new path of the file or directory. |
| `options`? | [`MoveOptions`](../interfaces/MoveOptions.md) | Options of move. |

## Returns

`AsyncVoidIOResult`

A promise that resolves to an `AsyncIOResult`
         indicating whether the file or directory was
         successfully moved.
