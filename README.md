[comment]: <> (
  SPDX-License-Identifier: GPL-3.0

  -------------------------------------------------------------
  Copyright © 2024, 2025
              Jiang Jie
  Copyright © 2025
              Pellegrino Prevete
  All rights reserved
  -------------------------------------------------------------
  
  This program is free software: you can redistribute
  it and/or modify it under the terms of the GNU
  General Public License as published by the Free
  Software Foundation, either version 3 of the License.
  
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  GNU General Public License for more details.
  
  You should have received a copy of the GNU General Public
  License along with this program.
  If not, see <https://www.gnu.org/licenses/>.)

# Origin Private File System module (`@themartiancompany/opfs`)

[![NPM version](
  https://img.shields.io/npm/v/@themartiancompany/opfs.svg)](
    https://npmjs.org/package/@themartiancompany/opfs)

[![cn](
  https://img.shields.io/badge/lang-cn-red.svg)](
  README.cn.md)

Browser-compatible `fs` module leveraging the
[Origin Private File System](
  https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system)
(OPFS) specification  which references the
[Deno Runtime File System](
  https://deno.land/api#File_System) and
[Deno `@std/fs`](
  https://jsr.io/@std/fs)
APIs.

OPFS stands for *origin private file system* 
and it is a file system API for manipulating local
files in a browser environment.

There are significant differences between the
standard OPFS API and familiar file system APIs
based on path operations, such as those of
Node.js and Deno.
The purpose of this module is to implement an API
similar to those in the browser, allowing for
convenient file operations.

The return values of asynchronous APIs are of the
[Result](
  https://github.com/JiangJie/happy-rusty)
type, similar to Rust's `Result` enum type,
providing a more user-friendly error handling approach.

As to why the library targets Deno, that's because:

- early versions of the Node.js fs API were based
  on callback syntax, although newer versions support
  Promise syntax;
  on the other hand, the Deno fs API was designed from
  the beginning with Promise syntax. Therefore, Deno has
  less historical baggage, making it a more suitable choice
  for implementing a native-compatible API;
- Deno natively supports TypeScript, while Node.js
  currently does not without the use of additional tools.

Originally based on the 
[Happy OPFS](
  https://github.com/JianJie/happy-opfs)
module by Jian Jie and renamed
because I've noticed there was no
`fs.createReadStream` implementation,
while the other available
[OPFS Tools`](
  )
module had but didn't call it verbatim
so I've thought it may have
been appropriate to make everybody including
the module potentially less happy and check
whether if a third module including the function
and simply called `opfs` can show how much the
`namespace/package` model works on the field.

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

## Synchronous support

> [!NOTE]
The asynchronous interface is to be preferred
because the main thread does not provide a synchronous interface,
so in order to force the implementation of synchronous syntax,
the I/O operation needs to be moved a
[`Worker`](
  https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API),
and the main thread needs to be blocked until the
`Worker` completes its I/O operation, which obviously
causes performance loss.

Also since the `Worker` needs to be started first
the synchronous interface can only be used after start completion,
such that any reading and writing before that will fail.

**Please note** that in order to share data
between the main thread and the `Worker`,
`SharedArrayBuffer` needs to be used and so
two additional `HTTP Response Headers` are required for this:
`'Cross-Origin-Opener-Policy': 'same-origin'`
and
`'Cross-Origin-Embedder-Policy': 'require-corp'`,
otherwise a `ReferenceError: SharedArrayBuffer is not defined`
error will be thrown.

The headers are automatically set up respectively by
Parcel and Serve in the Typescript and
Javascript examples below.

## Examples

To visually inspect file system status in-browser
it is available the
[OPFS Explorer](
  https://chromewebstore.google.com/detail/acndjpgkpaclldomagafnognkcgjignd)
extension.

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

### Typescript

Typescript asynchronous
([tests/async.ts](
  tests/async.ts))
and synchronous examples 
([tests/sync.ts](
  tests/sync.ts))
are made available in the `tests` directory.

To build them and make them available in an
HTTP server run

```bash
npm \
  run \
    start
```

then open
[https://localhost:8443/](
  https://localhost:8443/)
in your browser and open the developer
tools to observe the console output.

## Documentation

Module API is in the
[docs](
  docs/README.md)
directory.

## License

This software repository by Jian Jie
and Pellegrino Prevete is released
under the terms of the GNU Affero
General Public License version 3.
Portions of the works authored by
Jian are released under GNU General
Public License version 3.
