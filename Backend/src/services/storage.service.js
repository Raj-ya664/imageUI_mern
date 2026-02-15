const {ImageKit} = require("@imagekit/nodejs")


const imagekit = new ImageKit({
    privateKey: "private_y3385L9jpo297uHQGVz2Jol+PKU="
})


async function uploadFile(buffer){
    const result = await imagekit.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpg"
    })
   return result;
}

module.exports = uploadFile;