var fs = require('fs'),
    colors = require('colors');

fs.readdir('./', 'utf8', function(err, data) {
    var dataToFile;
    
    console.log('Zawartość katalogu:'.blue);
    data.forEach(function(item) {
        dataToFile += item + '\r\n';
    });

    console.log(dataToFile);

    fs.writeFile('./Zawartość katalogu.txt', dataToFile, 'utf-8', function(err) {
        if(err) throw err;
        console.log('Zapisano do pliku "Zawartość katalogu.txt"'.green);
    });
});