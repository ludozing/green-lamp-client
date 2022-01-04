export default function Footer(){
    return(
        <footer>
            <div id="info">
                <div className="innerCon">
                    <ul>
                        <li>
                            <h3>무통장 입급계좌</h3>
                            <div>
                                <p>BANK ACCOUNT</p>
                                <p><span>농협</span>301-1234-5645-01</p>
                                <p>예금주 - 김그린(그린조명)</p>
                            </div>
                        </li>
                        <li>
                            <h3>고객센터</h3>
                            <div>
                                <p>영업시간 이외에는 문의 게시판을 이용해주시면<br/>담당자 확인 후 빠른 답변 도와드리겠습니다.</p>
                                <p>02-1263-1245~6</p>
                            </div>
                        </li>
                        <li>
                            <h3>공지사항</h3>
                            <ul>
                                <li>조명가이드 <span>2021-12-22</span></li>
                                <li>신상품 입고 안내 <span>2021-12-10</span></li>
                                <li>몰 오픈을 축하드립니다. <span>2021-12-03</span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="footer-menu">
                <div id="fmenu">
                    <div className="innerCon">
                        <ul>
                            <li>홈</li>
                            <li>보고매장안내</li>
                            <li>이용약관</li>
                            <li>개인정보처리방침</li>
                        </ul>
                    </div>
                </div>
                <div id="fcopy">
                    <div className="innerCon">
                        상호: 그린조명 주소: 울산광역시 남구 삼산중로 100번길<br/>대표전화: 052-1234-4223 대표이사: 김그린<br/>개인정보관리자: 이블루 사업자등록번호: 102-12-12345<br/>copyright(c) Green Lamp, LTD all rights reserved.
                    </div>
                </div>
            </div>
        </footer>

    )
}