const { ipcMain } = require("electron");

const pathToRows = require("./pathsToRows")
const prepareData = require("./prepareData")


ipcMain.on("process-subtitles", (event, paths) => {
    console.log(paths);
    pathToRows(paths)
        .then(rows => prepareData(rows))
        .then(prepareData => console.log(prepareData))
    event.reply("process-subtitles", [
        { word: "i", amount: 547 },
        { word: "you", amount: 547 },
        { word: "flow", amount: 547 }
    ])
})