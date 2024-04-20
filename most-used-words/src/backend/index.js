const { ipcMain } = require("electron");

ipcMain.on("blablabla" , (event, dados) => {
    console.log(dados);
    event.reply("blablabla", "Respondido");
})