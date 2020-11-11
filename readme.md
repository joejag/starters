# Starters

A node package that gives you the start of a new project with unit tests in many different languages.

Currently we support:

 * cplusplus
 * csharp
 * go
 * java
 * node
 * python
 * ruby
 * scala
 * ts (typescript)

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
