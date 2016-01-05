# graphlib2dot

This command line tool takes a graphlib JSON document and converts it into a
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

You can create a JSON representation of your graphlib Graph via
`graphlib.json.write`. More info [here](https://github.com/cpettitt/graphlib/wiki/API-Reference#json-write).
