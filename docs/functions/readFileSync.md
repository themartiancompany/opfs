[**@themartiancompany/happy-opfs**](../README.md)

***

[@themartiancompany/happy-opfs](../README.md) / readFileSync

# Function: readFileSync()

## Call Signature

```ts
function readFileSync(filePath, options): IOResult<FileLike>
```

Defined in: worker/opfs\_worker\_adapter.ts:292

Sync version of `readFile`.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `filePath` | `string` |
| `options` | [`ReadOptions`](../interfaces/ReadOptions.md) & \{ `encoding`: `"blob"`; \} |

### Returns

`IOResult`\<[`FileLike`](../interfaces/FileLike.md)\>

## Call Signature

```ts
function readFileSync(filePath, options): IOResult<string>
```

Defined in: worker/opfs\_worker\_adapter.ts:302

Sync version of `readFile`.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `filePath` | `string` |
| `options` | [`ReadOptions`](../interfaces/ReadOptions.md) & \{ `encoding`: `"utf8"`; \} |

### Returns

`IOResult`\<`string`\>

## Call Signature

```ts
function readFileSync(filePath, options?): IOResult<ArrayBuffer>
```

Defined in: worker/opfs\_worker\_adapter.ts:312

Sync version of `readFile`.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `filePath` | `string` |
| `options`? | [`ReadOptions`](../interfaces/ReadOptions.md) & \{ `encoding`: `"binary"`; \} |

### Returns

`IOResult`\<`ArrayBuffer`\>
