const http = require("http");
import { lineIntersect } from '@turf/line-intersect';
const linesJson = require("./lines.json");
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    if(req.method === 'POST'){
        
        req.on("data", (data)=>{
            var lineString = data;
            
            let intersectionArray = linesJson.filter(line => {
                //var line1 = turf.lineString(line.line.coordinates);
                //var line2 = turf.lineString(lineString.coordinates);

                lineIntersect(line, lineString);

            });
            res.end(intersectionArray);
        })}

    //     console.log(lineString);
    //     //const authToken = req.body.authToken;
    
    //     let intersectionArray = linesJson.filter(line => turf.lineIntersect(line.coordinates, lineString));
    
    //         res.statusCode = 200;
    //         res.end(intersectionArray);
    // }

});

//console.log( linesJson);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});