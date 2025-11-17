[**@themartiancompany/opfs**](../README.md)

***

[@themartiancompany/opfs](../README.md) / zipSync

# Function: zipSync()

Sync version of `zip`.

## Call Signature

```ts
function zipSync(
   sourcePath, 
   zipFilePath, 
   options?): VoidIOResult
```

Defined in: worker/opfs\_worker\_adapter.ts:619

Sync version of `zip`.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `sourcePath` | `string` |
| `zipFilePath` | `string` |
| `options`? | [`ZipOptions`](../interfaces/ZipOptions.md) |

### Returns

`VoidIOResult`

## Call Signature

```ts
function zipSync(sourcePath, options?): IOResult<Uint8Array<ArrayBufferLike>>
```

Defined in: worker/opfs\_worker\_adapter.ts:633

Sync version of `zip`.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `sourcePath` | `string` |
| `options`? | [`ZipOptions`](../interfaces/ZipOptions.md) |

### Returns

`IOResult`\<`Uint8Array`\<`ArrayBufferLike`\>\>
