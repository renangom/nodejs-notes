import fs from 'fs';
const filename = 'config.json';

//All the operations are asynchronous
function configParser(env) {
    return new Promise((resolve,reject) => {
        //uses the open method to create a file handle open(nomedoarquivo, comodeveserabrido)
        // para ver os tipos de métodos de abrir, lembrar do linux, mas no livro pg 790 tem a tabela
        fs.open(filename, 'r', (err,handle) => {
            //precisamos do método para ter informações sobre o arquivo de configuração
            fs.stat(filename, (err, stats) => {
                //o buffer irá guardar o arquivo lido
                // todo buffer deve ter o tamanho especificado, pois não podem crescer dinamicamente
                const size = stats.size;
                const buffer = new Buffer.alloc(size);

                
                fs.read(handle,buffer,0 , size, 0 , (err, bytes,content) => {
                    fs.close(handle,(err) => {
                        const config = JSON.parse(content);
                        if(config.hasOwnProperty(env)){
                            resolve(config[env]);
                        }else {
                            reject(`Section ${env} does not exists`)
                        }
                    })
                })
            })
        })
    })
}

configParser('production').then((config) => {
    console.log("Production: ", config);
});

configParser('development').then((config) => {
    console.log('Development: ', config);
});

configParser('test').catch((err) => {
    console.log(err);
});