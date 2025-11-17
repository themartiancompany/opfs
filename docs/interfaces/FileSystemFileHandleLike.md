[**@themartiancompany/opfs**](../README.md)

***

[@themartiancompany/opfs](../README.md) / FileSystemFileHandleLike

# Interface: FileSystemFileHandleLike

Defined in: fs/defines.ts:188

A handle to a file or directory returned by `statSync`.

## Extends

- [`FileSystemHandleLike`](FileSystemHandleLike.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="kind"></a> `kind` | `FileSystemHandleKind` | The kind of the entry. | [`FileSystemHandleLike`](FileSystemHandleLike.md).[`kind`](FileSystemHandleLike.md#kind) | fs/defines.ts:184 |
| <a id="lastmodified"></a> `lastModified` | `number` | The last modified time of the file. | - | fs/defines.ts:202 |
| <a id="name"></a> `name` | `string` | The name of the entry. | [`FileSystemHandleLike`](FileSystemHandleLike.md).[`name`](FileSystemHandleLike.md#name) | fs/defines.ts:179 |
| <a id="size"></a> `size` | `number` | The size of the file. | - | fs/defines.ts:197 |
| <a id="type"></a> `type` | `string` | The type of the file. | - | fs/defines.ts:192 |
