const btnWatchMenu=document.getElementById('watchMenu')
const currencyBtn=document.querySelector('.currency')
const prices=document.querySelectorAll('.products-item-price')
const productsBtn=document.querySelectorAll('.product-btn')
const burgerInp=document.getElementById('burger')
const nameInp=document.getElementById('name')
const phoneInp=document.getElementById('phone')
const orderBtn=document.getElementById('order-btn')
const titles=document.querySelectorAll('.products-item-title')




btnWatchMenu.onclick=()=>{
    document.getElementById('products').scrollIntoView({
        behavior:'smooth'
    })
}

currencyBtn.onclick = () => {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });

    let currentCurrency = currencyBtn.innerText;
    let newCurrency = '$';
    let coef = 0;

    if (currentCurrency === '$') {
        newCurrency = '⃀';
        coef = 89.32;
        Som(newCurrency, coef);
    } else if (currentCurrency === '⃀') {
        newCurrency = '€';
        coef = 0.91;
        convertCurrency(newCurrency, coef);
    } else if (currentCurrency === '€') {
        newCurrency = '$';
        coef = 0.91;
        Euro(newCurrency, coef);
    }

    currencyBtn.innerText = newCurrency;
};

function convertCurrency(currency, coefcit) {
    for (let i = 0; i < prices.length; i++) {
        let basePrice = prices[i].getAttribute('data-base-price');
        prices[i].innerText = (basePrice * coefcit).toFixed(2) + ' ' + currency;
    }
}

function Som(currencyy, coefcitt) {
    for (let i = 0; i < prices.length; i++) {
        let basePrice = prices[i].getAttribute('data-base-price');
        prices[i].innerText = (basePrice * coefcitt).toFixed(2) + ' ' + currencyy;
    }
}
function Euro(currencyy, coefcitt) {
    for (let i = 0; i < prices.length; i++) {
        let basePrice = prices[i].getAttribute('data-base-price');
        prices[i].innerText = (basePrice * coefcitt).toFixed(2) + ' ' + currencyy;
    }
}


productsBtn.forEach((btn, i)=>{

    btn.onclick=()=>{
        burgerInp.value=`${titles[i].innerText}-${prices[i].innerText}`
        
        document.getElementById('order').scrollIntoView({
            behavior:'smooth'
        })
    }
})

orderBtn.onclick=()=>{
    const inputName = nameInp.value.trim();
    const inputPhone = phoneInp.value.trim();
        nameInp.value=''
        phoneInp.value=''
    if (inputName||inputPhone) {
        alert('Успешне') 
        burgerInp.value=''
        
    } else {
        nameInp.style.borderColor='red'
        phoneInp.style.borderColor='red'
        burgerInp.style.borderColor='red'
    }
}