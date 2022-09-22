import Getter from "./Getter.js";
import Writer from "./Writer.js";
import Deleter from "./Deleter.js";
(async () => {
    const picturePath = "/Users/jonas/Programming/AQstify/client/src/assets/pictures";
    const photoPath = "/Users/jonas/Programming/AQstify/client/src/photos.js";
    const deleter = new Deleter(photoPath);
    await deleter.deleteFile();
    const getter = new Getter(picturePath);
    const fileNames = await getter.getFileNames();
    if (fileNames != undefined) {
        const writer = new Writer(photoPath, fileNames);
        await writer.writePhotoFile();
        console.log("\x1b[32m%s\x1b[0m", "All files are sucessfully been written!");
    }
})();
