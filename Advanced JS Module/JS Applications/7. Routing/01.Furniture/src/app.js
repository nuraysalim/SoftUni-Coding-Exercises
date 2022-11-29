//import {login, register} from "./api/data.js";
import {render} from "../node_modules/lit-html/lit-html.js";
import page from '../node_modules/page/page.mjs';

import { logout } from './api/data.js';

import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { loginView } from './views/login.js';
import { myFurnitureView } from './views/myFurniture.js';
import { registerView } from './views/register.js';

const root = document.querySelector('.container');

page('/', renderMiddleWayer, catalogView);
page('/catalog', renderMiddleWayer, catalogView);
page('/create', renderMiddleWayer, createView);
page('/details/:id', renderMiddleWayer, detailsView);
page('/edit/:id', renderMiddleWayer, editView);
page('/login', renderMiddleWayer, loginView);
page('/register', renderMiddleWayer, registerView);
page('/my-furniture', renderMiddleWayer, myFurnitureView);
page('*', renderMiddleWayer, catalogView);


page.start();
updateNav;

function updateNav() {
    const userSection = document.getElementById("user");
    const guestSection = document.getElementById("guest");
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if(userData) {
        userSection.style.display = 'inline-block';
        guestSection.style.display = 'none';
    } else {
        userSection.style.display = 'none';
        guestSection.style.display = 'inline-block';
    }
};

document.getElementById('logoutBtn').addEventListener('click', async () =>{
    await logout();
    updateNav();
    page.redirect("/");
})

function renderMiddleWayer(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav;
    next();
};

