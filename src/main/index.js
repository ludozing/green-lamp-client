import {API_URL} from "../config/constants";
import "antd/dist/antd.css";
import "./main.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
function MainPage(){
    const [products, setProducts] = useState([]);
    // 비주얼 이미지 state로 관리
    const [banners, setBanners] = useState([]);
    useEffect(()=>{
        axios.get(`${API_URL}/products/`)
        .then(function(result){
            const products = result.data.products;
            console.log(products);
            setProducts(products);
        }).catch(function(error){
            console.log(error);
        })
        axios.get(`${API_URL}/banners/`)
        .then(result => {
            const banner = result.data.banners;
            setBanners(banner);    
        })
        .catch(error => {
            console.error(error)
        })
    },[])
    return (
        <div id="main">
            <Carousel autoplay={true} autoplaySpeed={3000}>
                {banners.map((banner,index)=>{
                    return(
                        <div id="visual" key={index}>
                            <img src={`${API_URL}/${banner.imgUrl}`} alt="최신조명" />
                        </div>
                    )
                })}
            </Carousel>
            <div id="product" className="innerCon">
                <h1>그린조명 최신상품</h1>
                <div id="product-list">
                    {
                        products.map(product=>{
                            return (
                                <div className="product-card" key={product.id}>
                                    <Link to={`/products/${product.id}`}>
                                        <div>
                                            <img className="product-img" src={product.imgUrl} alt="조명" />
                                        </div>
                                        <div className="product-contents">
                                            <span>{product.name}</span>
                                            <span>{product.price}</span>
                                            <div>
                                                <img className="product-avartar" src="images/icons/avatar.png" alt="아이콘" />
                                                <span>{product.seller}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default MainPage;