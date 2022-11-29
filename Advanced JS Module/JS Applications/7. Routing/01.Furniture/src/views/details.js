import { html } from "../../node_modules/lit-html/lit-html.js";
import { getItemById } from "../api/data.js";

export async function detailsView(ctx) {
   const id = ctx.params.id;
   const item = await getItemById(id);
   const userData = JSON.parse(sessionStorage.getItem('userData'));

   ctx.render(detailsTemp(item, userData._id === item._ownerId, deleteItemById));
}

async function deleteItemById(id) {

    
}

function renderOwnerBtn(isOwner, deleteItemById) {
    return isOwner ? html`                
                    <div>
                        <a href=”#” class="btn btn-info">Edit</a>
                        <a @click=${deleteItemById.bind(null, item._id)} href=”javascript:void(0)” class="btn btn-red">Delete</a>
                    </div>
` : "";
}

function detailsTemp(item, isOwner, deleteItemById) {
    const itemImgNameArr = item.img.split('/');
    return html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src=${"/images/" + itemImgNameArr[itemImgNameArr.length - 1]} />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${item.make}</span></p>
                <p>Model: <span>${item.model}</span></p>
                <p>Year: <span>${item.year}</span></p>
                <p>Description: <span>${item.description}</span></p>
                <p>Price: <span>${item.price} $</span></p>
                <p>Material: <span>${item.material}</span></p>
                ${renderOwnerBtn(isOwner, deleteItemById)}
            </div>
        </div>
    `
};
