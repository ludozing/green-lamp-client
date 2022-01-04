import {Link} from "react-router-dom";
export default function Header(){
    return(
        <header>
            <div className="innerCon">
                <h1><Link to="/">그린조명</Link></h1>
                <ul>
                    <li><Link to="/upload">상품등록하기</Link></li>
                    <li>상품보기</li>                    
                </ul>
            </div>
        </header>
    )
}