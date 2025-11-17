[comment]: <> (SPDX-License-Identifier: AGPL-3.0)

[comment]: <> (-------------------------------------------------------------)
[comment]: <> (Copyright © 2024, 2025  Pellegrino Prevete)
[comment]: <> (All rights reserved)
[comment]: <> (-------------------------------------------------------------)

[comment]: <> (This program is free software: you can redistribute)
[comment]: <> (it and/or modify it under the terms of the GNU Affero)
[comment]: <> (General Public License as published by the Free)
[comment]: <> (Software Foundation, either version 3 of the License.)

[comment]: <> (This program is distributed in the hope that it will be useful,)
[comment]: <> (but WITHOUT ANY WARRANTY; without even the implied warranty of)
[comment]: <> (MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the)
[comment]: <> (GNU Affero General Public License for more details.)

[comment]: <> (You should have received a copy of the GNU Affero General Public)
[comment]: <> (License along with this program.)
[comment]: <> (If not, see <https://www.gnu.org/licenses/>.)

# OPFS Module (`@themartiancompany/opfs`)

[![NPM version](
  https://img.shields.io/npm/v/@themartiancompany/opfs.svg)](
    https://npmjs.org/package/@themartiancompany/opfs)

[![cn](
  https://img.shields.io/badge/lang-cn-red.svg)](
  README.cn.md)

Browser-compatible `fs` module obtained combining the
[Happy OPFS](
  https://github.com/themartiancompany/happy-opfs)
and the
[OPFS Tools](
  https://github.com/hughfenghen/opfs-tools).

OPFS stands for *origin private file system* 
and it is a file system API for manipulating local
files in a browser environment.

## Installation

To install a locally built version of the
library run

```bash
$ make \
    all
```

An `opfs-<version>.tgz` npm archive will be generated
in the root of the repository.

To install the library system-wide run

```bash
# make \
    install-npm
```

To install it as a
[DogeOS](
  https://githubcom/themartiancompany/dogeos)
system package from the
[Ur](
  https://github.com/themartiancompany/ur)
uncensorable user repository and application
store run

```bash
ur \
  "nodejs-opfs"
```

A mirror of the Ur universal recipe
has been made available on The Martian
Company's Github at
[`nodejs-opfs-ur`](
  https://github.com/themartiancompany/nodejs-opfs-ur).

To download the library from
the NPM Registry run

```bash
npm \
  install \
  --save \
    "@themartiancompany/opfs"
```

### Documentation

For API documentation
refer to the
[Happy OPFS](
  https://github.com/themartiancompany/happy-opfs/blob/main/docs/README.md),
[OPFS Tools](
  https://github.com/hughfenghen/opfs-tools/blob/main/docs/api.md) and
[File System API](
  https://nodejs.org/api/fs.html).

### Javascript

If you are looking for an example of how
to write a full computer application
composed of only Bash programs and
Node modules but which runs the
same and with zero modifications
regardless of whether it has available
for display a terminal or a browser window,
you can look at the
[Ahsi](
  https://github.com/themartiancompany/ahsi)
program, written using the
[Crash Javascript](
  https://github.com/themartiancompany/crash-js)
and
[Crash Bash](
  https://github.com/themartiancompany/crash-bash)
libraries.

Refer to the Ahsi repository for more information
about installing and running it.

## License

This software repository is released
under the terms of the GNU Affero
General Public License version 3.
