import React from 'react';

import TopBar from '../../components/TopBar';
import Banner from '../../components/Banner';
import List from '../../components/ListProductsHome';
import Footer from '../../components/Footer';

const products = [
  {
    "name": "VESTIDO TRANSPASSE BOW",
    "style": "20002605",
    "code_color": "20002605_613",
    "color_slug": "tapecaria",
    "color": "TAPEÇARIA",
    "on_sale": false,
    "regular_price": "R$ 199,90",
    "actual_price": "R$ 199,90",
    "discount_percentage": "",
    "installments": "3x R$ 66,63",
    "image": "https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912",
    "sizes": [
      {
        "available": false,
        "size": "PP",
        "sku": "5807_343_0_PP"
      },
      {
        "available": true,
        "size": "P",
        "sku": "5807_343_0_P"
      },
      {
        "available": true,
        "size": "M",
        "sku": "5807_343_0_M"
      },
      {
        "available": true,
        "size": "G",
        "sku": "5807_343_0_G"
      },
      {
        "available": false,
        "size": "GG",
        "sku": "5807_343_0_GG"
      }
    ]
  },
  {
    "name": "REGATA ALCINHA FOLK",
    "style": "20002570",
    "code_color": "20002570_614",
    "color_slug": "preto",
    "color": "PRETO",
    "on_sale": false,
    "regular_price": "R$ 99,90",
    "actual_price": "R$ 99,90",
    "discount_percentage": "",
    "installments": "3x R$ 33,30",
    "image": "https://d3l7rqep7l31az.cloudfront.net/images/products/20002570_002_catalog_1.jpg?1459948578",
    "sizes": [
      {
        "available": true,
        "size": "PP",
        "sku": "5723_40130843_0_PP"
      },
      {
        "available": true,
        "size": "P",
        "sku": "5723_40130843_0_P"
      },
      {
        "available": true,
        "size": "M",
        "sku": "5723_40130843_0_M"
      },
      {
        "available": true,
        "size": "G",
        "sku": "5723_40130843_0_G"
      },
      {
        "available": true,
        "size": "GG",
        "sku": "5723_40130843_0_GG"
      }
    ]
  },
  {
    "name": "TOP CROPPED SUEDE",
    "style": "20002575",
    "code_color": "20002575_035",
    "color_slug": "caramelo",
    "color": "CARAMELO",
    "on_sale": false,
    "regular_price": "R$ 129,90",
    "actual_price": "R$ 129,90",
    "discount_percentage": "",
    "installments": "3x R$ 43,30",
    "image": "https://d3l7rqep7l31az.cloudfront.net/images/products/20002575_027_catalog_1.jpg?1459537946",
    "sizes": [
      {
        "available": false,
        "size": "PP",
        "sku": "5733_1000054_0_PP"
      },
      {
        "available": true,
        "size": "P",
        "sku": "5733_1000054_0_P"
      },
      {
        "available": true,
        "size": "M",
        "sku": "5733_1000054_0_M"
      },
      {
        "available": true,
        "size": "G",
        "sku": "5733_1000054_0_G"
      },
      {
        "available": false,
        "size": "GG",
        "sku": "5733_1000054_0_GG"
      }
    ]
  },
  {
    "name": "BOLSA FLAP TRIANGLE",
    "style": "20002945",
    "code_color": "20002945_027",
    "color_slug": "caramelo",
    "color": "CARAMELO",
    "on_sale": true,
    "regular_price": "R$ 199,90",
    "actual_price": "R$ 159,90",
    "discount_percentage": "25%",
    "installments": "3x R$ 53,30",
    "image": "https://d3l7rqep7l31az.cloudfront.net/images/products/20002945_027_catalog_1.jpg?1459540966",
    "sizes": [
      {
        "available": true,
        "size": "U",
        "sku": "6559_1000054_0_U"
      }
    ]
  },
  {
    "name": "VESTIDO LONGO FLOAT",
    "style": "20002606",
    "code_color": "20002606_612",
    "color_slug": "tapecaria",
    "color": "TAPEÇARIA",
    "on_sale": false,
    "regular_price": "R$ 219,90",
    "actual_price": "R$ 219,90",
    "discount_percentage": "",
    "installments": "3x R$ 73,30",
    "image": "https://d3l7rqep7l31az.cloudfront.net/images/products/20002606_615_catalog_1.jpg?1459515279",
    "sizes": [
      {
        "available": true,
        "size": "PP",
        "sku": "5811_343_0_PP"
      },
      {
        "available": false,
        "size": "P",
        "sku": "5811_343_0_P"
      },
      {
        "available": true,
        "size": "M",
        "sku": "5811_343_0_M"
      },
      {
        "available": true,
        "size": "G",
        "sku": "5811_343_0_G"
      },
      {
        "available": false,
        "size": "GG",
        "sku": "5811_343_0_GG"
      }
    ]
  },
];

export default function Home() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function loadProducts() {
  //     try {
  //       const response = await fetch(productsJson);
  //       const data = await response.json();
  //       setProducts(data.products)       
  //     } catch (err) {
  //       console.log('erro na requisição')
  //     }
  //   }

  //   loadProducts();
  // }, [products]);

  return (
    <div className='home-container'>
      <TopBar />
      <Banner />
      <List products={products} />
      <Footer />
    </div>  
  );
};