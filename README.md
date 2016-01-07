# graphlib2dot

This command line tool can convert between a graphlib JSON document and a
dot file.

## Installation

Install it globally with npm

```
npm install -g graphlib2dot
```

## Usage

Simply pipe your JSON document into the program:

```
cat graph.json | graphlib2dot
```

Or specify a file:

```
graphlib2dot -f graph.json
```

You can also convert in the other direction:

```
cat graph.dot | dot2graphlib
dot2graphlib -f graph.dot
```

You can create a JSON representation of your graphlib Graph via
`graphlib.json.write` and deserialize them via `graphlib.json.read`. More info [here](https://github.com/cpettitt/graphlib/wiki/API-Reference#json-write).
