import './App.css';
import {Routes, Route} from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import NavBar from './component/NavBar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체 상품 페이지, 로그인, 상품 상세 페이지
// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 클릭하면 로그인 페이지가 나온다.
// 4. 상품 디테일 페이지를 눌렀으나, 로그인이 안되어 있을 경우에는 로그인 페이지로 redirect
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 6. 로그아웃이되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// 7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 8. 상품을 검색할 수 잇다.

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true : 로그인O , false : 로그인X

  useEffect(() => {
    console.log("hello : " + authenticate)
  }, [authenticate]);

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<PrivateRoute/>} />
      </Routes>
    </div>
  );
}

export default App;
