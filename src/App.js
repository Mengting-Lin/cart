import React from 'react';
// import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './index.scss';

function App() {
  const bag = <FontAwesomeIcon icon={faShoppingBag} />
  const trash = <FontAwesomeIcon icon={faTrashAlt} />
  // const font = {
  //   font-family: var(--main-title-chinese)
  // }
  return (
    <>
      <h1>{bag} My Cart</h1>
      <h2>❶確認購買商品➔❷確認訂單➔❸選擇付款方式➔❹完成結帳</h2>
      <table>
        <thead>
          <tr>
            <th>選取</th>
            <th>商品圖片</th>
            <th>商品名稱</th>
            <th>商品單價</th>
            <th>數量</th>
            <th>商品小計</th>
            <th>刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>購買清單－課程</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th><input type="checkbox" id=""></input></th>
            {/* <td><img src={require('./img/violin01.jpeg')}></img></td> */}
            <td>img</td>
            <td>春季吉他班</td>
            <td>$1,700</td>
            <td>10</td>
            <td>$17,000</td>
            <td>{trash}</td>
          </tr>
        </tbody>
      </table>

      <div>
        <h2>收件人資訊</h2>
        <form className="cart-form" action="">
          <label for="name">
            <div className="cart-inp font-size-1rem "/>
              姓名
            <input id="name" className="font-size-114rem" type="text"/>
          </label>
          <label for="add">
            <div className="cart-inp font-size-1rem ">
              地址
              <input id="add" className="font-size-114rem" type="text"/>
            </div>
          </label>
          <label for="phone">
            <div className="cart-inp font-size-1rem ">
              手機號碼
              <input id="phone" className="font-size-114rem" type="text"/>
            </div>
          </label>
          <label for="email">
            <div className="cart-inp font-size-1rem ">
              電子信箱
              <input id="email" className="font-size-114rem" type="text"/>
            </div>
          </label>
        </form>
      </div>

      {/* <div>
        <h2>統一發票</h2>
        <div>
          <input type="checkbox" id="">個人戶電子發票
          <p>中獎時會寄送至收件地址</p>
        </div>
      </div> */}

      <div>
        <div>
          <label for="discount">
              <div className="cart-inp font-size-1rem ">
                折扣碼
                <input id="discount" className="font-size-114rem" type="text"/>
              </div>
          </label>
        </div>
        <div>
          <table>
            <tr>
              <th>合計</th>
              <th>$ 2,800</th>
            </tr>
            <tr>
              <th>折扣</th>
              <th>- $ 1,000</th>
            </tr>
            <tr>
              <th>總計</th>
              <th>$ 1,800</th>
            </tr>
          </table>
        </div>
      </div>
      <button type="" className="form-button">繼續購物</button>
      <button type="submit" classNameName="form-button">下一步→</button>
    </>
  );
}

export default App;
