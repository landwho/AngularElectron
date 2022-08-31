// ./build_installer.js

// 1.Import Modules
const { MSICreator } = require('electron-wix-msi');
const path = require('path');

// 2. Define input and output directory.
// Important: the directories must be absolute, not relative e.g
// appDirectory: "D:\\desktop-app\\electron\\Desktop-app-win32-x64"
const APP_DIR = path.resolve('C:\\test\\electronApp\\electron\\Desktop-app-win32-x64');
// outputDirectory 
const OUT_DIR = path.resolve(__dirname, './my_app');

// 3. INstantiate the MSICreator
const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    //configure metadata
    description:'',
    exe:'demo app',
    version: '1.0.0',

    //configure installer User Interface
    ui:{
        chooseDirectory: true
    },
});

// 4. Create a .wxs template file 
msiCreator.create().then(function(){
    // 5. Compile the template to a .msi file 
    msiCreator.compile();
});













