[**@themartiancompany/happy-opfs**](../README.md)

***

[@themartiancompany/happy-opfs](../README.md) / TempOptions

# Interface: TempOptions

Defined in: fs/defines.ts:291

Options for `mkTemp`.

## Properties

| Property | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="basename"></a> `basename?` | `string` | `tmp` | The basename of the file or directory. eg: `mktemp -t basename.XXX` | fs/defines.ts:304 |
| <a id="extname"></a> `extname?` | `string` | `undefined` | The extension of the file. eg: `mktemp --suffix .txt` | fs/defines.ts:310 |
| <a id="isdirectory"></a> `isDirectory?` | `boolean` | `false` | Whether to create a directory. eg: `mktemp -d` | fs/defines.ts:297 |
