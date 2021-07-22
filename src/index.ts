// Import stuff needed to import the helper functions
import { readdirSync } from "fs"
import { join } from "path"

const functionsFolder = readdirSync(join(__dirname, "functions")) // Get the functions folder
const functionsToExport: string[] = []

// For each file in the functions folder, import() it.
for (const functionFile of functionsFolder) {
   functionsToExport.push(functionFile) 
}

export default functionsToExport // Export the array of functions