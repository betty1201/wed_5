const add = document.querySelector(".add");

const add_Item = document.querySelector(".add_Item");
const add_Save = document.querySelector(".add_Save");
const list_item = document.querySelector(".list_item");
const list_num = document.querySelector(".list_num");

let data =[]

/*渲染*/
function renderData(){
    let str = "";
    data.forEach(function(item,index){
        str+= `<li class="list_item_li"><input class="check" type="checkbox" name="${index}" value="check">${item.content}<a href="" class="delete"><i class="delete fas fa-times" data-num="${index}"></i></a></li>`;
    });
    list_item.innerHTML = str;
}

/*新增*/
add_Save.addEventListener("click",function(e){
    e.preventDefault();
    if(add_Item.value.trim()==""){
        alert("尚未輸入");
        return;
    }
    let obj={};
    obj.content = add_Item.value;
    data.push(obj);
    renderList_num();
    renderData();
})

/*刪除*/
list_item.addEventListener("click",function(e){
    e.preventDefault();
    console.log(e.target.getAttribute("class"));
    if(e.target.getAttribute("class")=="delete fas fa-times"){
        let num = e.target.getAttribute("data-num");
        data.splice(num,1);
        renderList_num();
        renderData();
    }
    /*全部刪除
    if(e.target.getAttribute("class")=="check"){
        console.log("點擊check");
        const check = document.querySelectorAll(".check");
        e.target.setAttribute(checked);
    }
    */
})

/*待完成項目*/
function renderList_num(){
    list_num.textContent = `${data.length} 個待完成項目`;
}
renderList_num();