import fs from "fs/promises";
export default class Writer {
    constructor(photoPath, fileNames) {
        this.photoPath = photoPath;
        this.fileNames = fileNames;
    }
    async writePhotoFile() {
        await this.writeImport();
        await this.writeObject();
    }
    async writeImport() {
        for (let fileName of this.fileNames) {
            let file = await fileName.toString().split(".");
            let dataImport = "import picture" +
                file[0] +
                ' from "./Components/pictures/' +
                fileName +
                '" \n';
            try {
                await fs.appendFile(this.photoPath, dataImport);
            }
            catch (err) {
                console.error(err);
            }
        }
    }
    async writeObject() {
        let objectOpen = "\nexport const photos = [ \n";
        await fs.appendFile(this.photoPath, objectOpen);
        for (let fileName of this.fileNames) {
            let file = await fileName.toString().split(".");
            let photo = "{  src: picture" + file[0] + ", \n width: 4, \n height: 3 }, \n";
            await fs.appendFile(this.photoPath, photo);
        }
        try {
            await fs.appendFile(this.photoPath, "]");
        }
        catch (err) {
            console.error(err);
        }
    }
}
