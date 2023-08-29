import React, { useEffect } from "react";
import { useState } from "react";
import ProductDetail from "./Card/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../assets/mock-images";

const productosMock = [
  {
    id: 1,
    title: "Vasija Moderna",
    price: 1000,
    detail: "Vasija Moderna de barro cocido",
    categoryId: 1,
    img: images[0].src,
  },
  {
    id: 2,
    title: "Vasija Antigua",
    price: 2000,
    categoryId: 1,
    detail: "Vasija Antigua de barro cocido",
    img: images[1].src,
  },
  {
    id: 3,
    title: "Vasija Medieval",
    price: 3000,
    categoryId: 1,
    detail: "Vasija Medieval de barro cocido",
    img: images[2].src,
  },
  {
    id: 4,
    title: "Plato Modeno",
    price: 4000,
    categoryId: 2,
    detail: "Plato Moderno de barro cocido",
    img: images[3].src,
  },
  {
    id: 6,
    title: "Plato Medieval",
    price: 6000,
    categoryId: 2,
    detail: "Plato Medieval de barro cocido",
    img: images[4].src,
  },
  {
    id: 7,
    title: "Taza Moderna",
    price: 7000,
    categoryId: 3,
    detail: "Taza Moderna de barro cocido",
    img: images[5].src,
  },
  {
    id: 8,
    title: "Taza Antigua",
    price: 8000,
    categoryId: 3,
    detail: "Taza Antigua de barro cocido",
    img: images[6].src,
  },
  {
    id: 9,
    title: "Taza Medieval",
    price: 9000,
    categoryId: 3,
    detail: "Taza Medieval de barro cocido",
    img: images[7].src,
  },
  {
    id: 10,
    title: "Jarra Moderna",
    price: 10000,
    categoryId: 4,
    detail: "Jarra Moderna de barro cocido",
    img: images[8].src,
  },
  {
    id: 11,
    title: "Jarra Antigua",
    price: 11000,
    categoryId: 4,
    detail: "Jarra Antigua de barro cocido",
    img: images[9].src,
  },
  {
    id: 12,
    title: "Jarra Medieval",
    price: 12000,
    categoryId: 4,
    detail: "Jarra Medieval de barro cocido",
    img: images[10].src,
  },
  {
    id: 13,
    title: "Jarron Moderno",
    price: 13000,
    categoryId: 5,
    detail: "Jarron Moderno de barro cocido",
    img: images[11].src,
  },
  {
    id: 14,
    title: "Jarron Antiguo",
    price: 14000,
    categoryId: 5,
    detail: "Jarron Antiguo de barro cocido",
    img: images[12].src,
  },
  {
    id: 15,
    title: "Jarron Medieval",
    price: 15000,
    categoryId: 5,
    detail: "Jarron Medieval de barro cocido",
    img: images[13].src,
  },
  {
    id: 16,
    title: "Florero Moderno",
    price: 16000,
    categoryId: 6,
    detail: "Florero Moderno de barro cocido",
    img: images[14].src,
  },
  {
    id: 17,
    title: "Florero Antiguo",
    price: 17000,
    categoryId: 6,
    detail: "Florero Antiguo de barro cocido",
    img: images[15].src,
  },
  {
    id: 18,
    title: "Florero Medieval",
    price: 18000,
    categoryId: 6,
    detail: "Florero Medieval de barro cocido",
    img: images[16].src,
  },
];

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productosMock);

      if (!productosMock) {
        reject("No hay productos");
      }
    }, 2000);
  });
};

const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const products = productosMock.filter(
        (product) => product.categoryId === parseInt(categoryId)
      );
      resolve(products);

      if (!products) {
        reject("No hay productos");
      }
    }, 2000);
  });
};

const ItemListContainer = (id) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  var id = id.id; //Declaro porque sino me da error

  useEffect(() => {
    if (id>0) {
      getProductsByCategory(id)
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    } else {
      getProducts()
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, []);
  return (
    <div>
      <h2>Productos</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <ProductDetail product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
