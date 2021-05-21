const { app, BrowserWindow } = require('electron');

/* Проверка обновлений */
require('update-electron-app')();

/* Инициализация приложения */
const init = () => {

  /* Создаем окно браузера */
  const mainWindow = new BrowserWindow();

  /* Задаем текст, который будет выводится */
  let content = `${app.getName()} v${app.getVersion()}`;

  /* Загружаем текст в окно */
  mainWindow.webContents.loadURL('data:text/plain;charset=utf-8,' + encodeURI(content));
};

app.on('ready', init);