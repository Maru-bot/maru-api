const path = require('path');
const fs = require('fs');

const routesPath = path.join(__dirname, "../routes");
let Files  = [];

function loadAllRoutes(app) {

    ThroughDirectory(routesPath);
    

    Files.forEach(name => {
        try{
            const route = require(name.dir);
          
            const routePath = name.routePath === "/index.js" ? "/" : `${name.routePath.slice(0, -3).replace(/\\/g, "/").replace('index', "")}`;
            app.use(routePath, route);
            console.log(`Loading ${routePath}`);


        } catch (error) {
            console.log(`Error occured with the route "${name.routePath}":\n\n${error} Ignoreing continuing`);
        }
    });
    return this; 
}
// localhost:8000/images



function ThroughDirectory(Directory) {
    fs.readdirSync(Directory).forEach(File => {
        const Absolute = path.join(Directory, File);
        if (fs.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
        else return Files.push({ dir: Absolute, name: File, routePath: Absolute.split("\\routes")[1]});
    });
}

module.exports = loadAllRoutes;