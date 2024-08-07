let displayItems = document.querySelectorAll('.abc');
let all = document.querySelector('.display-section');
// all.innerHTML = '';
const items=[
    {
        id:'001',
        items_img:'Images/shirts.jpg',
        rating: 4.5,
        noofreviwes:38,
        company_name:`Marks`,
        item_type:`Mens Formal`,
        current_price:1199,
        original_price:2999,
        discount:70,
    },
    {
        id:'002',
        items_img:'Images/display-img.png',
        rating: 4,
        noofreviwes:18,
        company_name:`H&M`,
        item_type:`Mens Formal`,
        current_price:1200,
        original_price:1400,
        discount: 12,
    },
    {
        id:'003',
        items_img:'Images/display-img.png',
        rating: 4,
        noofreviwes:18,
        company_name:`H&M`,
        item_type:`Mens Formal`,
        current_price:1200,
        original_price:1400,
        discount: 12,
    },
    {    
        id:'004',
        items_img:'Images/display-img.png',
        rating: 4,
        noofreviwes:18,
        company_name:`H&M`,
        item_type:`Mens Formal`,
        current_price:1200,
        original_price:1400,
        discount: 12,
    
    },
    
    {
    
        id:'005',
        items_img:'Images/display-img.png',
        rating: 4,
        noofreviwes:18,
        company_name:`H&M`,
        item_type:`Mens Formal`,
        current_price:1200,
        original_price:1400,
        discount: 12,
    },
    
    {
        id:'006',
        items_img:'Images/display-img.png',
        rating: 4,
        noofreviwes:18,
        company_name:`H&M`,
        item_type:`Mens Formal`,
        current_price:1200,
        original_price:1400,
        discount: 12,
    },
    
    {
        id:'007',
        items_img:'Images/display-img.png',
        rating: 4,
        noofreviwes:18,
        company_name:`H&M`,
        item_type:`Mens Formal`,
        current_price:1200,
        original_price:1400,
        discount: 12,
    },
    
    {
        id:'008',
        items_img:'Images/display-img.png',
        rating: 4,
        noofreviwes:18,
        company_name:`H&M`,
        item_type:`Mens Formal`,
        current_price:1200,
        original_price:1400,
        discount: 12,
    }, 
    
];

let bagId;
let bagStr=localStorage.getItem('bagId');
bagId=bagStr ?  JSON.parse(bagStr) :[];
displaybagcount();  
function addtobag(itemId) {
    bagId.push(itemId);
    localStorage.setItem('bagId',JSON.stringify(bagId));
    displaybagcount();
  }


function displaybagcount(){
    let itemcount=document.querySelector('.bag-count')
    if(bagId.length>0){
      itemcount.style.visibility='visible';
      itemcount.innerText=bagId.length;
    }
    else{
      itemcount.style.visibility='hidden';
    }

}

function displayitemsonscreen(items) {
    let innerHTML = '';
    items.forEach((item, i) => {
      innerHTML += `
        <div class="abc">
          <img src="${item.items_img}" alt="" height="350px" width="250px"><br>
          <p class="rating"> &nbsp ${item.rating}⭐| ${item.noofreviwes}</p>
          <div class="detail-div">
            <p>${item.company_name}</p>
            <p>${item.item_type}</p>
            <p>Rs. ${item.current_price} <span class="original-price">Rs.${item.original_price}</span><span>(${item.discount}% OFF)</span></p>
            <div><button class="addtobag" onclick="addtobag('${item.id}')">Add to bag</button></div>
          </div>
        </div>
      `;
});
if (all) {
  all.innerHTML = innerHTML;
} else {
  console.error('Element with class "display-section" not found');
}
}

onload();

function onload(){
    displayBagItems();
    bagItemsLoad();
}
function bagItemsLoad(){
  let loadedBagItems = bagId.map(id =>{
      for(let i=0; i<items.length; i++)
      {
          if(id == items[i].id)
          {
              return items[i];
          }     
      }
  })

  console.log(loadedBagItems);
}


function displayBagItems(){
    let bagItems=document.querySelector('.product-container-details');
    let innerHTML1='';
    loadedBagItems.forEach(bagId=>{
      innerHTML1+=generateHTML(bagId);
    });
    bagItems.innerHTML=innerHTML1;


}
function generateHTML(item){
          return ` <div>
                    <div class="product-container">
                        <img src="${item.items_img}" alt="items-photo" height="300px" width="200px">
                        <div class="details-div">
                            <p>${item.company_name}</p>
                            <p>${item.item_type}</p>
                            <p>Rs. 1199 <span class="original-price">Rs. 2999</span><span>(60% OFF)</span></p>
                        </div>
                  </div>
            </div>`;

}