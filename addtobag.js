/*let bagId=[];
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

let bagItemsLoad;
onload();

function onload(){
    displayBagItems();
    bagItemsLoad();
}

function bagItemsLoad(){
    console.log(bagId);
    bagItemsLoad=bagId.map(id =>{
        for(let i=0; i<items.length; i++)
        {
            if(id == items[i].id)
            {
                return items[i];
            }     
        }
    })

    console.log(bagItemsLoad);

}
function displayBagItems(){
    let bagItems=document.querySelector('.product-container-details');
    bagItems.innerHTML=` <div>
                    <div class="product-container">
                        <img src="Images/shirts.jpg" alt="items-photo" height="300px" width="200px">
                        <div class="details-div">
                            <p>Marks</p>
                            <p>Men Formal</p>
                            <p>Rs. 1199 <span class="original-price">Rs. 2999</span><span>(60% OFF)</span></p>
                        </div>
                  </div>
            </div>`
}*/
