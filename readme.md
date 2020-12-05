# Starters

> Wouldn't it be nice if we didn't have to mess around with tooling to try ideas out?

A node package that gives you the start of a new project with unit tests in many different languages.

Currently we support:

- cplusplus
- csharp
- go
- java
- node
- python
- ruby
- rust
- scala
- ts (typescript)

## Install

```bash
$ npm install --global starters
```

or without installation

```bash
$ npx starters
```

## Example

```bash
$ npx starters python
 STARTERS  Copied new python project to /private/tmp/python_project

$ cd python_project

$ tree
.
├── runTests.sh
└── starter.py

0 directories, 2 files

$ ./runTests.sh
.
----------------------------------------------------------------------
Ran 1 test in 0.000s

OK
```

## CLI

```
$ starters <language>

  Usage
    $ starters

  Examples
    $ starters ts
     Copied new ts project to /tmp/ts_project
```

# How to add a new language

We'd appreciate any new language that you can provide. To do this:

- Create a new folder under `available` and add your source tree.
- Make sure a `runTests.sh` exists in your new folder
  - Assume the standard tools are already installed for the language
  - The programme shouldn't watch, it should run and exist cleanly
  - The user shouldn't have to do anything else to make the script pass
- Add the language in `supported.tsx`

And to test it...

- Add the language to `supported` in `endToEndTest.sh`
- Add any required tooling to the `Dockerfile`. The tests run inside this Docker container
- Run the `endToEndTest.sh` and make sure it finishes
