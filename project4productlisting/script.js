

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000 },
  { id: 2, name: "Phone", category: "Electronics", price: 30000 },
  { id: 3, name: "Shirt", category: "Clothing", price: 1000 },
  { id: 4, name: "Jeans", category: "Clothing", price: 2000 },
  { id: 5, name: "Tablet", category: "Electronics", price: 25000 },
  { id: 6, name: "Smart Watch", category: "Electronics", price: 8000 },
  { id: 7, name: "Headphones", category: "Electronics", price: 3500 },
  { id: 8, name: "Speaker", category: "Electronics", price: 4500 },
  { id: 9, name: "Mouse", category: "Electronics", price: 700 },
  { id: 10, name: "Keyboard", category: "Electronics", price: 1200 },

  { id: 11, name: "Jacket", category: "Clothing", price: 3000 },
  { id: 12, name: "T-Shirt", category: "Clothing", price: 600 },
  { id: 13, name: "Sweater", category: "Clothing", price: 1800 },
  { id: 14, name: "Shorts", category: "Clothing", price: 900 },
  { id: 15, name: "Cap", category: "Clothing", price: 400 },

  { id: 16, name: "Novel", category: "Books", price: 350 },
  { id: 17, name: "Dictionary", category: "Books", price: 500 },
  { id: 18, name: "Notebook", category: "Books", price: 150 },
  { id: 19, name: "Comic Book", category: "Books", price: 250 },
  { id: 20, name: "Biography", category: "Books", price: 450 },

  { id: 21, name: "Football", category: "Sports", price: 800 },
  { id: 22, name: "Cricket Bat", category: "Sports", price: 2500 },
  { id: 23, name: "Tennis Racket", category: "Sports", price: 3200 },
  { id: 24, name: "Basketball", category: "Sports", price: 900 },
  { id: 25, name: "Badminton Kit", category: "Sports", price: 1500 },

  { id: 26, name: "Sofa", category: "Furniture", price: 25000 },
  { id: 27, name: "Chair", category: "Furniture", price: 2000 },
  { id: 28, name: "Table", category: "Furniture", price: 4500 },
  { id: 29, name: "Bed", category: "Furniture", price: 18000 },
  { id: 30, name: "Cupboard", category: "Furniture", price: 12000 }
];
const productrender=document.getElementById("productContainer");
const searchproducts=document.getElementById("search");
const categoryproducts=document.getElementById("category");
const priceproducts=document.getElementById("maxPrice");
const sortproducts=document.getElementById("sort")
function renderproduct(product){
     productrender.innerHTML = "";
    product.forEach(product => {
       
        let card=document.createElement("div");
           card.classList.add("card");
           card.innerHTML = `
           <h3>${product.name}</h3>
           <p>${product.category}</p>
           <p>${product.price}</p>
         `
         productrender.appendChild(card);
        
    });
           
}
function filterproducts(){
     const searchtext=searchproducts.value.toLowerCase();
     const categorytext=categoryproducts.value;
     const pricenumber=Number(priceproducts.value);
     const sorttext=sortproducts.value;
     
     const filteredproduct=products.filter(product=>{
         const matchserch=product.name.toLowerCase().includes(searchtext);
         const matchcategory=categorytext ==="all"|| product.category===categorytext
         const matchprice=!pricenumber||pricenumber >= product.price
       
        return matchserch && matchcategory && matchprice

     })
       if(sorttext === "lowToHigh"){
            filteredproduct.sort((a,b)=>{
                return a.price-b.price;
            })
         }
         if(sorttext === "highToLow"){
            filteredproduct.sort((a,b)=>{
                return b.price-a.price;
            })
         }
     renderproduct(filteredproduct)
}
const gridBtn = document.getElementById("gridView");
const listBtn = document.getElementById("listView");
gridBtn.addEventListener("click", () => {

    productrender.classList.remove("list-view");

});
listBtn.addEventListener("click", () => {

    productrender.classList.add("list-view");

});

searchproducts.addEventListener("input",filterproducts)
categoryproducts.addEventListener("change",filterproducts)
priceproducts.addEventListener("input",filterproducts)
sortproducts.addEventListener("change",filterproducts)
renderproduct(products)

