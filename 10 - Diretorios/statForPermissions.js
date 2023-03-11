import fs from 'fs'

const filename = './error.log';


fs.stat(filename, (err, stat) => {
    showPerms(err,stat);
    fs.chmod(filename, 0o777, (err) => {
        //alterando o dono e grupo
        fs.chown(filename, 0, 0, (err) => {
            fs.stat(filename, showPerms);
        });
    });
});

function showPerms(err, stat) {
    console.log(`User: ${stat.uid}`);
    console.log(`Group: ${stat.gid}`);
    console.log(`Permissions: ${stat.mode}`);
}
