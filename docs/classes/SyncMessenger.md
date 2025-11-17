[**@themartiancompany/opfs**](../README.md)

***

[@themartiancompany/opfs](../README.md) / SyncMessenger

# Class: SyncMessenger

Defined in: worker/shared.ts:203

Inspired by [memfs](https://github.com/streamich/memfs/blob/master/src/fsa-to-node/worker/SyncMessenger.ts).

Used both in main thread and worker thread.

## Constructors

### new SyncMessenger()

```ts
new SyncMessenger(sab): SyncMessenger
```

Defined in: worker/shared.ts:216

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sab` | `SharedArrayBuffer` |

#### Returns

[`SyncMessenger`](SyncMessenger.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="headerlength"></a> `headerLength` | `readonly` | `number` | worker/shared.ts:211 |
| <a id="i32a"></a> `i32a` | `readonly` | `Int32Array` | worker/shared.ts:205 |
| <a id="maxdatalength"></a> `maxDataLength` | `readonly` | `number` | worker/shared.ts:214 |
| <a id="u8a"></a> `u8a` | `readonly` | `Uint8Array` | worker/shared.ts:208 |
