import React from 'react';
// import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import './index.scss';

function App() {
  const bag = <FontAwesomeIcon icon={faShoppingBag} />
  const trash = <FontAwesomeIcon icon={faTrashAlt} />
  const addBtn = <FontAwesomeIcon className="cart-addBtn" icon={faPlusCircle} />
  const deBtn = <FontAwesomeIcon className="cart-deBtn" icon={faMinusCircle} />

  return (
    <>
      <div className="cart-container">
        <div className="cart-title">
          <h1>{bag} My Cart</h1>
          <span style={{fontSize:'var(--h2)'}}>❶確認購買商品➔❷確認訂單➔❸選擇付款方式➔❹完成結帳</span>
        </div>
        <table className="cart-table">
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
              <th colspan="7">購買清單－課程</th>
            </tr>
            <tr>
              <th><input type="checkbox" id=""/></th>
              <td><img src={require('./img/violin01.jpeg')}></img></td>
              <td>春季吉他班</td>
              <td>$1,700</td>
              <td>
                {deBtn}
                <div className="cart-number">10</div>
                {addBtn}
              </td>
              <td>$17,000</td>
              <td><div className="cart-btn" onClick={()=>{}}>{trash}</div></td>
            </tr>
            <tr>
              <th><input type="checkbox" id=""/></th>
              <td><img src={require('./img/violin01.jpeg')}></img></td>
              {/* <td>img</td> */}
              <td>春季吉他班</td>
              <td>$1,700</td>
              <td>
                {deBtn}
                <div className="cart-number">10</div>
                {addBtn}
              </td>
              <td>$17,000</td>
              <td><div className="cart-btn" onClick={()=>{}}>{trash}</div></td>
            </tr>
          </tbody>
        </table>

        <div>
          <form className="cart-form" action="#" method="GET" enctype="multipart/form-data">
            <div>
              <h2>收件人資訊</h2>
                <fieldset>
                  <label><input type="checkbox" id=""/>同帳戶資料</label><br/>           
                  <div className="cart-inp">
                    <label for="name">姓名</label>
                    <br/>
                    <input className="" autofocus autocomplete="off" id="name" type="text" name="name" placeholder="" size="10"/>
                  </div>                
                  <div className="cart-inp">
                    <label for="add">地址</label>
                    <br/>
                    <input className="" id="add" type="text"/>
                  </div>                              
                  <div className="cart-inp">
                    <label for="phone">手機號碼</label>
                    <br/>
                    <input className="" id="phone" type="text"/>
                  </div>              
                  <div className="cart-inp">
                    <label for="email">電子信箱</label>
                    <br/>
                    <input id="email" className="" type="text"/>
                  </div>              
                </fieldset>
            </div>
            <div>
              <h2>統一發票</h2>
                <fieldset>
                  <div className="">
                    <label><input type="checkbox" id=""/>個人戶電子發票</label><br/>
                    <span>中獎時會寄送至收件地址</span>
                  </div>
                  <div className="cart-inp">           
                    <label><input type="checkbox" id=""/>電子發票載具</label>
                    <br/>              
                    <label for="einvoice">載具號碼</label>
                    <br/>
                    <input className="" id="einvoice" type="text"/>
                  </div>
                  <div>                              
                    <label><input type="checkbox" id=""/>捐贈發票</label><br/>
                    <span>提醒您，捐贈發票後無法變更成開立或索取紙本發票。</span><br/>
                    <select>
                      <option value="台灣流浪兔保護協會">台灣流浪兔保護協會</option>
                      <option value="社團法人台灣愛兔協會">社團法人台灣愛兔協會</option>
                      <option value="財團法人陽光社會福利基金會">財團法人陽光社會福利基金會</option>
                    </select>                          
                  </div>
                  <div>
                    <label><input type="checkbox" id=""/>公司戶</label><br/>
                    <span>提醒您，公司戶發票一旦開立，不得任意更改或改為個人戶發票。</span><br/>   
                    <label for="einvoice">統一編號</label>
                    <br/>
                    <input className="" id="einvoice" type="text"/>
                    <br/>              
                    <label for="einvoice">發票抬頭</label>
                    <br/>
                    <input className="" id="einvoice" type="text"/>
                  </div>            
                </fieldset>
            </div>
          </form>
        </div>

        <div>
          <div className="cart-inp">
            <label for="discount">折扣碼</label><br/>
            <input className="" id="discount" type="text"/>
          </div>
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
        <button className="" type="">繼續購物</button>
        <button className="" type="submit">下一步→</button>
      </div>
    </>
  );
}

export default App;
