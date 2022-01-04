import "./upload.scss";
export default function UploadPage(){
    return(
        <div id="upload" className="innerCon">
            <h2>상품등록하기</h2>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>상품사진</td>
                            <td><input type="file" /></td>
                        </tr>
                        <tr>
                            <td>상품명</td>
                            <td><input type="text" name="prooductname" /></td>
                        </tr>
                        <tr>
                            <td>판매자명</td>
                            <td><input type="text" name="sellername" /></td>
                        </tr>
                        <tr>
                            <td>상품가격</td>
                            <td><input type="tex" name="price" /></td>
                        </tr>
                        <tr>
                            <td>상품소개</td>
                            <td>
                                <textarea></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button type="submit">등록</button>
                                <button type="reset">취소</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}