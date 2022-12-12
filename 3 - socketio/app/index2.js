import { Router } from "express";
import checkAuth from './check-auth.js'


export default function init(logoutWebsocket){
    const router = Router();

    //rotas
    router.get('/', (req,res) => {
        res.render('login')
    })

    router.post('/login', (req,res) => {
        const user = req.body.username;
        const password = req.body.password;

        if(user === 'u1' && password === 'test'){
            req.session.user = 'u1';
        }else if(user === 'u2' && password === 'test'){
            req.session.user = 'u2';
        }

        res.redirect('/chat')
    })

    router.get('/chat', checkAuth ,(req,res) => {
        res.render('chat', {user: req.session.user})
    })

    router.get('/logout', (req,res) => {
        logoutWebsocket(req.session.user)
        delete req.session.user;
        res.redirect('/')
    })

    return router
}