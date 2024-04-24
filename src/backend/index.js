const { ipcMain } = require("electron");

const pathToRows = require("./pathsToRows")
const prepareData = require("./prepareData")
const groupWords = require("./groupWords")

ipcMain.on("process-subtitles", (event, paths) => {
    console.log(paths);
    pathToRows(paths)
        .then(rows => prepareData(rows))
        .then(prepareData => groupWords(prepareData))
        .then(groupWords => {
            event.reply("process-subtitles", groupWords)
        })
})