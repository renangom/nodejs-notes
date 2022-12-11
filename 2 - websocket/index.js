
import path from 'path'
import url from 'url'
import express from 'express'
import cookieSession from 'cookie-session';
import { router } from './app';


const app = express();


app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
}))

app.use(express.urlencoded({extended: false}))

app.set('views', `${path.dirname(url.fileURLToPath(import.meta.url))}/app/views`)
app.set('view engine', 'pug')


// ================== ROTAS ===================

app.get('/', (req, res) => {
    res.render('login')
})

app.use(router)
// ================ APP
app.listen(8080, () => {
    console.log('Server is listenning to port 8080')
})