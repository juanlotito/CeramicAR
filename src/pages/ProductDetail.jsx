import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import images from '../assets/mock-images';

const productosMock = [
    {id: 1, title:"Vasija Moderna", price: 1000, detail: "Vasija Moderna de barro cocido", categoryId: 1, img: images[0].src},
    {id: 2, title:"Vasija Antigua", price: 2000, categoryId: 1, detail: "Vasija Antigua de barro cocido", img: images[1].src},
    {id: 3, title:"Vasija Medieval", price: 3000, categoryId: 1, detail: "Vasija Medieval de barro cocido", img: images[2].src},
    {id: 4, title:"Plato Modeno", price: 4000, categoryId: 2, detail: "Plato Moderno de barro cocido", img: images[3].src},
    {id: 6, title:"Plato Medieval", price: 6000, categoryId: 2, detail: "Plato Medieval de barro cocido", img: images[4].src},
    {id: 7, title:"Taza Moderna", price: 7000, categoryId: 3, detail: "Taza Moderna de barro cocido", img: images[5].src},
    {id: 8, title:"Taza Antigua", price: 8000, categoryId: 3, detail: "Taza Antigua de barro cocido", img: images[6].src},
    {id: 9, title:"Taza Medieval", price: 9000, categoryId: 3, detail: "Taza Medieval de barro cocido", img: images[7].src},
    {id: 10, title:"Jarra Moderna", price: 10000, categoryId: 4, detail: "Jarra Moderna de barro cocido", img: images[8].src},
    {id: 11, title:"Jarra Antigua", price: 11000, categoryId: 4, detail: "Jarra Antigua de barro cocido", img: images[9].src},
    {id: 12, title:"Jarra Medieval", price: 12000, categoryId: 4, detail: "Jarra Medieval de barro cocido", img: images[10].src},
    {id: 13, title:"Jarron Moderno", price: 13000, categoryId: 5, detail: "Jarron Moderno de barro cocido", img: images[11].src},
    {id: 14, title:"Jarron Antiguo", price: 14000, categoryId: 5, detail: "Jarron Antiguo de barro cocido", img: images[12].src},
    {id: 15, title:"Jarron Medieval", price: 15000, categoryId: 5, detail: "Jarron Medieval de barro cocido", img: images[13].src},
    {id: 16, title:"Florero Moderno", price: 16000, categoryId: 6, detail: "Florero Moderno de barro cocido", img: images[14].src},
    {id: 17, title:"Florero Antiguo", price: 17000, categoryId: 6, detail: "Florero Antiguo de barro cocido", img: images[15].src},
    {id: 18, title:"Florero Medieval", price: 18000, categoryId: 6, detail: "Florero Medieval de barro cocido", img: images[16].src},
  ]

  const getProductById = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = productosMock.find(product => product.id === parseInt(id));
            resolve(product);
            if (!product) {
                reject('No se encontró el producto');
            }
        }, 2000);
    });
    };

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id)
            .then(data => {
                setProduct(data);
            })
            .catch(error => {
                console.error(error);
                setProduct(null);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading)
    {
        return <p>Cargando...</p>
    }

    if (!product) {
        return <h1>Producto no encontrado</h1>;
      }

    return (
    <div>
        <div className="container">
        <div className='card mb-3' style={{maxWidth: '540px', marginTop:"10px"}}>
            <img src={product.img} className='card-img-top' alt='...' style={{maxWidth:"500px", height: '300px'}}/>
            <div className='card-body' style={{alignSelf:"center"}}>
                <h5 className='card-title'>{product.title}</h5>
                <p className="card-text">{product.detail}</p>
                <p className='cart-text'>{product.price}</p>
                <button className='btn btn-primary'>Agregar al carrito</button>
            </div>                
        </div>
        </div>
    </div>
  );
};

export default ProductDetail;