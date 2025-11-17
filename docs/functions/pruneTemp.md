[**@themartiancompany/opfs**](../README.md)

***

[@themartiancompany/opfs](../README.md) / pruneTemp

# Function: pruneTemp()

```ts
function pruneTemp(expired): AsyncVoidIOResult
```

Defined in: fs/opfs\_tmp.ts:95

Prune the temporary directory and delete all expired files.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `expired` | `Date` | The date to determine whether a file is expired. |

## Returns

`AsyncVoidIOResult`

A promise that resolves to an `AsyncVoidIOResult`
         indicating whether the temporary directory was successfully pruned.
