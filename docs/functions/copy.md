[**@themartiancompany/opfs**](../README.md)

***

[@themartiancompany/opfs](../README.md) / copy

# Function: copy()

```ts
function copy(
   srcPath, 
   destPath, 
   options?): AsyncVoidIOResult
```

Defined in: fs/opfs\_ext.ts:279

Copies a file or directory from one location to another same as `cp -r`.

Both `srcPath` and `destPath` must both be a file or directory.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `srcPath` | `string` | The source file/directory path. |
| `destPath` | `string` | The destination file/directory path. |
| `options`? | [`CopyOptions`](../interfaces/CopyOptions.md) | The copy options. |

## Returns

`AsyncVoidIOResult`

A promise that resolves to an `AsyncVoidIOResult`
         indicating whether the file was successfully copied.
