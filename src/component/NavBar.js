import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const menuList = ["남성","여성","아동","신생아/유아","H&M HOME","Sale" ];
    
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    };

    const goToHome = () => {
        navigate("/");
    }

    const search = (event) => {
        if(event.key === "Enter"){
            // 입력한 검색어를 읽어와서
            let keyword = event.target.value;
            // url 을 바꿔준다.
            //console.log("keyword : ", keyword);
            navigate(`/?q=${keyword}`);
        }
    }
  return (
    <div>
        <div className='login-button' onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <div>로그인</div>
        </div>
        <div className='logo-img' onClick={goToHome}>
            <img width={200} height={200} src="https://blog.kakaocdn.net/dn/doBY5S/btrlEmJSNSs/qmgj8lzzHRkt2b0WX5nSN1/img.png" alt="profile"/>
        </div>
        <div className='menu-area'>
            <div></div>
            <ul className='menu-list'>
                {menuList.map((menu) => <li key={menu}>{menu}</li>)}
            </ul>
            <div className='search-area'>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" onKeyPress={(event) => search(event)} />
            </div>
        </div>
    </div>
  )
}

export default NavBar