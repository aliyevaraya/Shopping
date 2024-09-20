const cards = document.getElementById("cards");
const search = document.getElementById("search");
const sidebar = document.getElementById("sidebar");
const basket = document.getElementById("basket");

function getFullCards(arr) {
  arr.map((item) => {
    cards.innerHTML += `
            <div class="max-w-[250px] rounded-md shadow-xl text-gray-800 my-5">
                <img src="${
                  item.image
                }" alt="product photo" class="object-fit w-full rounded-t-md h-[200px]">
                <div class="flex flex-col justify-between py-6 px-3 space-y-8">
                    <div class="space-y-2">
                        <h2 class="text-[18px] font-semibold">${item.title.slice(
                          0,
                          20
                        )}...</h2>
                        <p class="text-gray-800 text-[14px]">${item.description.slice(
                          0,
                          50
                        )}...</p>
                    </div>
                    <button onclick="addBasket('${item.image}', '${
      item.title
    }', '${item.price}', '${
      item.id
    }')" type="button" class="active:bg-green-900 active:text-white  flex items-center justify-center p-3 font-semibold rounded-md bg-gray-200 text-green-700">${
      item.price
    }</button>
                </div>
            </div>
        `;
  });
}
getFullCards(data);

function searchProduct() {
  let searchInp = search.value;
  cards.innerHTML = "";
  if (searchInp.trim() == "") getFullCards(data);
  else {
    let filtered = data.filter((item) =>
      item.title.toLocaleLowerCase().startsWith(searchInp.toLocaleLowerCase())
    );
    getFullCards(filtered);
  }
}

function openSIdebar() {
  sidebar.classList.toggle("right-0");
}

let basketArr = [];
function addBasket(img, title, price, id) {
  basket.innerHTML = "";
  let obj = { img, title, price, id, count: 1 };
  let product = basketArr.find((item) => item.id == obj.id)
  if (product) {
    product.count++;
  } else {
    basketArr.push(obj);
  }
  basketArr.map((item) => {
    basket.innerHTML += `
    <div class="flex items-center gap-4 mb-5 border border-slate-300 p-2 rounded-md">
        <img src="${item.img}" alt="product" class="w-[50px]"/>
        <div>
            <h4 class="font-semibold">${item.title.slice(0, 15)}...</h4>
            <span class="text-[14px] text-yellow-800 mr-5">${item.price}</span>
            <span class="text-[14px] text-yellow-800">Say <span>${item.count}</span></span>
        </div>
    </div>
`;
  });
}
