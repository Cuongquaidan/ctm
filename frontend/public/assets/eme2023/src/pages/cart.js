'use strict';
boxSpinnerLoader('body',false);
class CartTotalBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { total: 0,shipping: 0 };
    }
    getDataCart = async () => {
        callAjax(`/ajaxGetDataCart`,{},'GET').then((res)=>{
            resolve(res);
        })
    }
    render() {
        // let data = await this.getDataCart();
        // console.log(data);
        return (<>
                <div className="summery-contain">
                    <ul>
                        <li>
                        <h4>Tạm tính</h4>
                        <h4 className="price itemTotal">10000</h4>
                        </li>
                        <li>
                        <h4>Vận chuyển</h4>
                        <h4 className="price shippingValue">10000</h4>
                        </li>
                        <li>
                        <h4>Giảm giá</h4>
                        <h4 className="price">-10000</h4>
                        </li>
                        <li>
                        <h4 className="price">- 10000</h4>
                        </li>
                    </ul>
                </div>
                <ul className="summery-total">
                    <li className="list-total border-top-0 pb-0">
                        <h4>Tổng cộng</h4>
                        <h4 className="price text-danger">10000</h4>
                    </li>
                </ul>
                <input type="hidden" name="total" defaultValue={10000} />
            </>)
    }
}

const domContainer = document.querySelector('.cartTotalBox');
const root = ReactDOM.createRoot(domContainer);
root.render(<CartTotalBox />);

