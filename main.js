import {menu} from './products.js';

const section = document.querySelector("#menuItems");
const btnContainer = document.querySelector("#buttons");


const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"] // intial values of values array
);

const categoryList = () => {
    const categoryBtns = categories
      .map((category) => {
        return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
      })
      .join(""); //innerHTML e atarken bunu koymazsak array element arası virgülleride gözükür yada tırkan aralaralarında ne gözükmesini istersen onu yaz
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".btn-item")
  
    //filter menu
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id
        console.log(category)
        const menuCategory = menu.filter((menuItem) => {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "All") {
          menuList(menu)
        } else {
          menuList(menuCategory)
        }
      });
    });
};

const menuList = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
      return `<div class="menu-items col-lg-6 col-sm-12">
              <img
                src=${item.img}
                alt=${item.title}
                class="photo"
              />
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </div>
      `;
    }).join(""); // displayMenu = displayMenu.join("") de olabilir.
    section.innerHTML = displayMenu;
};

menuList(menu)
categoryList();