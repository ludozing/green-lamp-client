import axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./detail.scss"
export default function ProductView(){
    const [product,setProduct] = useState(null);
    const param = useParams();
    const {id} = param
    useEffect(()=>{
        axios.get(
            `https://26d48607-2eae-41d0-86ac-0385c3e79417.mock.pstmn.io/products/${id}`
        ).then(function(result){
            setProduct(result.data);
        })
        .catch(function(error){
            console.log(error)
        })
    },[]);
    if(product == null){
        return <div>상품정보를 받고 있습니다....</div>
    }
    return (
        <div id="detail" className="innerCon">
            <h1>{product.name}</h1>
            <div id="image-box">
                <img src={product.imageUrl} alt="제품" />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" alt="아이콘" />
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div>{product.name}</div>
                <div>{product.price}</div>
                <div>2022년 1월 4일</div>
                <div>설명글 어쩌고 저쩌고...</div>
            </div>
        </div>
    )
}