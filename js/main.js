import productdb,{
    bulkcreate,
    getData,
    createEle
} from './module.js';


let db = productdb("Productdb",{
    products : `++id, name, seller, price`
});

//input 
const userid    = document.getElementById("userid");
const proname   = document.getElementById("proname");
const seller    = document.getElementById("seller");
const price     = document.getElementById("price");


//button
const btncreate     = document.getElementById("btn-create");
const btnread       = document.getElementById("btn-read");
const btnupdate     = document.getElementById("btn-update");
const btndeleteall  = document.getElementById("btn-delete-all");

//insert data
btncreate.onclick = (event) => {
    let flag = bulkcreate (db.products,{
        name: proname.value,
        seller: seller.value,
        price: price.value
    })
    // console.log(flag);

    proname.value = seller.value = price.value = "";
    getData(db.products, (data) => {
        userid.value = data.id + 1 || 1;
    });
}

//update data

//read data
btnread.onclick = table;


function table (){
    const tbody = document.getElementById("tbody");

    while(tbody.hasChildNodes()){
        tbody.removeChild(tbody.firstChild);
    }
    
getData(db.products,(data)=>{
    if(data){
        createEle("tr",tbody,tr =>{
            for (const value in data) {
                createEle("td", tr, td =>{
                    td.textContent = data.price === data[value] ? `Rp. ${data[value]}` : data[value];
                } )
            }
            createEle("td",tr,td => {
                createEle("i",td,i => {
                    i.className += "fas fa-edit btnedit";
                    i.setAttribute(`data-id`, data.id); 
                    i.onclick = editbtn;
                })
            })
            createEle("td",tr,td => {
                createEle("i",td,i => {
                    i.className += "fas fa-trash-alt btndelete"; 
                })
            })
        })
    }
})
}

function editbtn(event){
    // console.log(event.target);
    let id = parseInt(event.target.dataset.id);

    db.products.get(id, data => {
        userid.value    = data.id || 0;
        proname.value   = data.name||"";
        seller.value    = data.seller||"";
        price.value     = data.price|| "";
    })
}