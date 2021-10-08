const menu=[{
    id:1,
    title:"buttermilk pancakes",
    category:"breakfast",
    price:"$20.23",
    img:"buttermilk-pancakes.jpg",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat saepe, laborum rerum quo optio adipisci! Nostrum, at, delectus vitae praesentium dignissimos sapiente iure ratione veritatis iste, ex quae ipsum?"
},
{
    id:2,
    title:"dinner Double",
    category:"lunch",
    price:"$25.99",
    img:"dinner double.jpg",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat saepe, laborum rerum quo optio adipisci! Nostrum, at, delectus vitae praesentium dignissimos sapiente iure ratione veritatis iste, ex quae ipsum?"
},
{
    id:3,
    title:"godzilla milkshake",
    category:"shakes",
    price:"$23.12",
    img:"godzilla milkshake.jpg",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat saepe, laborum rerum quo optio adipisci! Nostrum, at, delectus vitae praesentium dignissimos sapiente iure ratione veritatis iste, ex quae ipsum?"
},
{
    id:4,
    title:"country delight",
    category:"breakfast",
    price:"$34.67",
    img: "country delight.jpg",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat saepe, laborum rerum quo optio adipisci! Nostrum, at, delectus vitae praesentium dignissimos sapiente iure ratione veritatis iste, ex quae ipsum?"
},
{
    id:5,
    title:"egg attack",
    category:"lunch",
    price:"$32.88",
    img:"egg attack.jpg",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat saepe, laborum rerum quo optio adipisci! Nostrum, at, delectus vitae praesentium dignissimos sapiente iure ratione veritatis iste, ex quae ipsum?"
},
{
    id:6,
    title:" oreo dream",
    category:"shakes",
    price:"$67.55",
    img:"oreo milkshakes.png",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat saepe, laborum rerum quo optio adipisci! Nostrum, at, delectus vitae praesentium dignissimos sapiente iure ratione veritatis iste, ex quae ipsum?"
},
{
    id:7,
    title:"bacon overflow",
    category:"breakfast",
    price:"$12.78",
    img:"bacon overflow.jpg",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat saepe, laborum rerum quo optio adipisci! Nostrum, at, delectus vitae praesentium dignissimos sapiente iure ratione veritatis iste, ex quae ipsum?"
},
{
    id:8,
    title:"american classic",
    category:"lunch",
    price:"$54.21",
    img:"american classic.jpg",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat saepe, laborum rerum quo optio adipisci! Nostrum, at, delectus vitae praesentium dignissimos sapiente iure ratione veritatis iste, ex quae ipsum?"
},
{
    id:9,
    title: "quarantine buddy",
    category:"shakes",
    price:"$61.74",
    img:"quarantine buddy.jpg",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat saepe, laborum rerum quo optio adipisci! Nostrum, at, delectus vitae praesentium dignissimos sapiente iure ratione veritatis iste, ex quae ipsum?"
},
{
    id:10,
    title: "bison steak",
    category:"dinner",
    price:"$22.88",
    img:"bison steak.jpg",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat saepe, laborum rerum quo optio adipisci! Nostrum, at, delectus vitae praesentium dignissimos sapiente iure ratione veritatis iste, ex quae ipsum?"
},
]
console.log(menu[4]);

const sectionCenter =document.querySelector(".section-center");

const filterBtns=document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu);
});

filterBtns.forEach(function(btn){
    btn.addEventListener("click",function(e)
    {
        const category =(e.currentTarget.dataset.id); 
        const menuCategory =menu.filter(function(menuItem){
            if(menuItem.category===category)
            return menuItem;
        })
        if(category ==="all")
        {
            displayMenuItems(menu)
        }
        else
        {
            displayMenuItems(menuCategory)
        }
    })
})








function displayMenuItems(menuItems)
{
    let displayMenu=menuItems.map(function(items)
    {
        console.log(items);
        // return `<h1>${items.title}</h1>`;
        return ` <article class="menu-item">
                <img src="${items.img}"  class="photo" alt="${items.title}">
                <div class="item-info">
                    <header>
                        <h4>${items.title}</h4>
                        <h4 class ="price">${items.price}</h4>
                    </header>
                    <p class="item-text">
                      ${items.desc}
                    </p>
                </div>
            </article>`;
    })
     displayMenu=displayMenu.join("");
    sectionCenter.innerHTML=displayMenu;
    
    console.log(displayMenu);
    

}





















// const x=[1,2,3,4,5,6]
// let y =x.map(function(z)
// {
//     z=z*3;
//     console.log(z)
//     return z;
// })
// console.log(y)