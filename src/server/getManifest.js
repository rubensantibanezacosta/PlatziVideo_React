import fs from "fs";
const getManifest=()=>{
    try {
        
        const man=JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`));
        console.log(man);
        return man;
    } catch (error) {
        console.error(error);
    }
};

export default getManifest;