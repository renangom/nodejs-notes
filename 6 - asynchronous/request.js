import {request} from 'http';

function doRequest(url) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: url,
            port: 90,
            method:'GET',
        };

        const requestObj = request(options, (response) => {
            response.setEncoding('utf-8');
            let data = '';

            response.on('data', (chunk) => (data += chunk));
            response.on('end', () => resolve(data));
            response.on('error', (e) => reject(e));
        });

        requestObj.end();
    })
}

doRequest('www.google.de').then((data) => {
    console.log('data: ', data);
},
(err) => {
    console.log('error: ', err)
}
)