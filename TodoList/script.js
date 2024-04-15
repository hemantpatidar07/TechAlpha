const inputbox = document.querySelector("#input");
const addbut = document.querySelector("#addbut");
const add = document.querySelector(".add-content");

addbut.addEventListener('click',(e)=>{
 if(inputbox.value ===''){
    alert('please write something')
 }
 else{
     let li = document.createElement('li')
     li.innerHTML = inputbox.value;
     add.appendChild(li);
     let span = document.createElement('span');
     span.innerHTML = "\u00d7";
     li.appendChild(span);
 }
 inputbox.value ="";
 savedata();
})
add.addEventListener('click', (e) => {
if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    savedata();
} else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    savedata();
}
});

function savedata(){
localStorage.setItem("data",add.innerHTML);
}
function showdata(){
add.innerHTML = localStorage.getItem('data');
}
showdata();