const divProducts = document.getElementById('products');
const sideBar = document.querySelector('#sideBar');
const nav = document.querySelector('.nav-bar');
const products = [
  {
      key:0,
      name: 'Smartwatch Amazfit Basic Bip Lite 1.28" pulseira black',
      img: './assets/amazfit_bip1.png',
      price: 'R$ 276<sup><small>99</small></sup>',
      installments: '12x R$16<sup>99</sup> sem juros',

  },
  {
      key:1,
      name: 'Fones de ouvido Xiaomi Redmi Airdots 3 branco',
      img: './assets/airdots3mi.png',
      price: 'R$ 199<sup><small>99</small></sup>',
      installments: '12x R$16<sup>99</sup> sem juros',
  },
  {
      key:2,
      name: 'Notebook Dell G3 Core I5 8gb 512gb Ssd Nvidia Windows',
      img: './assets/notebook.png',
      price: 'R$ 6.499<sup><small>30</small></sup>',
      installments: '12x R$16<sup>99</sup> sem juros',
  },
  {
      key:3,
      name: 'Sony PlayStation 4 Pro 1TB cor preto onyx',
      img: './assets/play4.png',
      price: 'R$ 276<sup><small>99</small></sup>',
      installments: '12x R$16<sup>99</sup> sem juros',
  },
  {
      key:4,
      name: 'Fone Headset Gamer HyperX Cloud Stinger',
      img: 'https://img.terabyteshop.com.br/archive/2882828960/headset-gamer-hyperx-cloud-stinger-02.png',
      price: 'R$ 343<sup><small>68</small></sup>',
      installments: '12x R$24<sup>64</sup> sem juros',
  },
  {
      key:5,
      name: 'Monitor Gamer LG 25UM58G 25” LED IPS - Full HD HDMI 75Hz',
      img: 'https://a-static.mlcdn.com.br/618x463/monitor-gamer-lg-25um58g-25-led-ips-full-hd-hdmi-75hz-1ms/magazineluiza/226704800/86314c8484d1eed2638ab9e6d726e4f8.jpg',
      price: 'R$ 899<sup><small>10</small></sup>',
      installments: '10x R$99<sup>90</sup> sem juros',
  },
  {
      key:6,
      name: 'Suporte para Monitor de Mesa Articulado - LCD LED até 34”',
      img: 'https://www.miranda.com.br/lojas/2057/img/interno/prd_216222_p_41555.jpg',
      price: 'R$ 179<sup><small>00</small></sup>',
      installments: '6x R$29<sup>99</sup> sem juros',
  },
  {
      key:7,
      name: 'Kit Teclado e Mouse Gamer HP USB Preto',
      img: 'https://awstatic-5754.kxcdn.com/lD2RYhyvtrY9sFgr4hUIuyt3P6M=/0x0/loja/londritech.com.br/prodimg/83/0754612001597157105.jpg',
      price: 'R$ 219<sup><small>29</small></sup>',
      installments: '12x R$18<sup>27</sup> sem juros',
  },
  {
      key:8,
      name: 'HD 4TB SATA3 Seagate IronWolf - ST4000VN008',
      img: 'https://a-static.mlcdn.com.br/618x463/hd-4tb-sata3-seagate-ironwolf-st4000vn008-35pol-6gb-s-5-900-rpm-64mb-cache/wazhardwarestore/113900/a26667fcbaefab98d254cbad1a8153d2.jpg',
      price: 'R$ 145<sup><small>90</small></sup>',
      installments: '12x R$16<sup>21</sup> sem juros',
  },
  {
      key:9,
      name: 'Cadeira de Escritório Diretor Giratória',
      img: 'https://a-static.mlcdn.com.br/618x463/cadeira-de-escritorio-diretor-giratoria-dir-002-nell/magazineluiza/224326200/8b91a4df02b915d7151c267c948d97f5.jpg',
      price: 'R$ 349<sup><small>00</small></sup>',
      installments: '6x R$58<sup>17</sup> sem juros',
  },
];

const initializeStore = () => {
    products.map(item => {
        divProducts.innerHTML += `
        <a href="#" class="card" key="${item.key}">
            <div class="product-single">
                <img src="${item.img}">
                <div class="divider"></div>
                <div class="informations">
                    <p class="description">${item.name}</p>
                    <span class="price">${item.price}</span>
                    <small class="installments">${item.installments}</small>
                </div>
            </div>
        </a>
        `;
    });
};

initializeStore();

sideBar.addEventListener('click', () => {
    sideBar.classList.toggle('active');
    if(sideBar.classList.contains('active')){
        nav.style.left = '0px';
    } else {
        nav.style.left = '-1000px';
    }
    nav.addEventListener('click', () => {
        sideBar.classList.remove('active');
        nav.style.left = '-1000px';
    });
});