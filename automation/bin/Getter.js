import fs from "fs/promises";
export default class Getter {
    constructor(picturePath) {
        this.picturePath = picturePath;
    }
    async getFileNames() {
        let fileNames = [];
        try {
            const files = await this.getPicturePaths();
            for (const file of files) {
                fileNames.push(file);
            }
            if (fileNames) {
                return fileNames;
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    async getPicturePaths() {
        return await fs.readdir(this.picturePath);
    }
}
