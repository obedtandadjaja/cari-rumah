import path from 'path'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'

const typeDefsArray = fileLoader(path.join(__dirname, './**/type-def.js'))
export default mergeTypes(typeDefsArray)
