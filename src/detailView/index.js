import { API_URL } from "../config/constants";
import axios from "axios";
import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./detail.scss"
export default function ProductView(){
    const [product,setProduct] = useState(null);
    const param = useParams();
    const navigate = useNavigate();
    const {id} = param
    useEffect(()=>{
        axios.get(
            `${API_URL}/products/${id}`
        ).then(function(result){
            setProduct(result.data.product);
        })
        .catch(function(error){
            console.log(error)
        })
    },[]);
    const productDel = () =>{
        axios.delete(`${API_URL}/products/${id}`)
        .then(function(result){
            console.log("삭제되었습니다.");
            navigate(-1);
        })
        .catch(error => {
            console.error(error);
        })
    }
    if(product == null){
        return <div>상품정보를 받고 있습니다....</div>
    }
    return (
        <div id="detail" className="innerCon">
            <h1>{product.name}</h1>
            <div id="image-box">
                <img src={`${API_URL}/${product.imgUrl}`} alt="제품" />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" alt="아이콘" />
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div>{product.name}</div>
                <div>{product.price}</div>
                <div>{product.createdAt}</div>
                <div>{product.description}</div>
            </div>
            <div className="btn">
                <span onClick={productDel}>삭제하기</span>
            </div>
        </div>
    )
}