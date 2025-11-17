[**@themartiancompany/opfs**](../README.md)

***

[@themartiancompany/opfs](../README.md) / mkTemp

# Function: mkTemp()

```ts
function mkTemp(options?): AsyncIOResult<string>
```

Defined in: fs/opfs\_tmp.ts:51

Create a temporary file or directory.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | [`TempOptions`](../interfaces/TempOptions.md) | Options and flags. |

## Returns

`AsyncIOResult`\<`string`\>

A promise that resolves the result of
         the temporary file or directory path.
