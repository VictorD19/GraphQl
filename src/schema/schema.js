const { readFileSync } = require("fs");
const path = require("path");

const pathDoc = path.resolve(__dirname,'schema.graphql')
const data = readFileSync(pathDoc, { encoding: "utf-8", flag: "r" });


module.exports = {
    schema: data
}