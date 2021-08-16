const divProducts = document.getElementById('products')
const sideBar = document.querySelector('#sideBar')
const nav = document.querySelector('.nav-bar')

const products = [
    {
        id:0,
        name: 'Smartwatch Amazfit Basic Bip Lite 1.28"',
        img: './assets/amazfit_bip1.png'

    },
    {
        id:1,
        name: 'Fone de ouvido Xiaomi Redmi Airdots 3 branco',
        img: './assets/airdots3mi.png'

    },
    {
        id:2,
        name: 'Notebook Dell G3 Core I5 8gb 512gb Ssd Nvidia Windows',
        img: './assets/notebook.png'

    },
    {
        id:2,
        name: 'Sony PlayStation 4 Pro 1TB Standard cor  preto onyx',
        img: './assets/play4.png'

    },
    {
        id:2,
        name: 'Playstation 4',
        img: './assets/play4.png'

    },
    {
        id:2,
        name: 'Playstation 4',
        img: './assets/play4.png'

    },
    {
        id:2,
        name: 'Playstation 4',
        img: './assets/play4.png'

    },
    {
        id:2,
        name: 'Playstation 4',
        img: './assets/play4.png'

    },
];

initializeStore = () => {
    products.map(item => {
        divProducts.innerHTML += `
            <a href="https://google.com" class="card">
                <div class="product-single">
                    <img src="${item.img}">
                    <p class="description">${item.name}</p>
                    <button class="info-product">Ver informaçoes</button>
                </div>
            </a>
        `
    })
}

initializeStore()

sideBar.addEventListener('click', () => {
    sideBar.classList.toggle('active')
    if(sideBar.classList.contains('active')){
        nav.style.left = '0px'
    } else {
        nav.style.left = '-1000px'
    }
    nav.addEventListener('click', () => {
        sideBar.classList.remove('active')
        nav.style.left = '-1000px'
    })
})