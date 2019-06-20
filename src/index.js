module.exports= function ({types: t}) {
  return {
    visitor: {
      Identifier(path) {
        if(path.node.name === "deez"){
          path.node.name = "this"
        }
      }
    }
  }
}
