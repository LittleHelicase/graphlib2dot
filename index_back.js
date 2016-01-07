#!/usr/bin/env node
/* global __dirname, process */

import program from 'commander'
import fs from 'fs'
import getStdin from 'get-stdin'
import graphlib from 'graphlib'
import gdot from 'graphlib-dot'

program
  .version(JSON.parse(fs.readFileSync(__dirname + '/../package.json'))['version'])
  .option('-p, --prettyprint', 'Enable pretty printing of graphlib json document')
  .option('-f, --graphfile <graphfile>', 'Set graph file to parse. If none is given stdin is read')
  .parse(process.argv)

var processGraph = str => {
  var graph = gdot.read(str)
  var json = graphlib.json.write(graph)
  if (program.prettyprint) {
    return JSON.stringify(json, null, 2)
  } else {
    return JSON.stringify(json)
  }
}

if (program.graphfile) {
  var str = fs.readFileSync(program.graphfile)
  console.log(processGraph(str))
} else {
  getStdin().then(str => {
    try {
      console.log(processGraph(str))
    } catch (e) {
      console.error('Error while processing: ', e)
    }
  })
}
