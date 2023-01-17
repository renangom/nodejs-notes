process.on('message', (message) => {
    console.log(`From parent process: ${message}`);
})

process.send('Hi from child process');