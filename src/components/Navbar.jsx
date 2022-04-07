import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [list, setList] = useState("false");

  const showList = () => {
    if(list == "true") {
      setList("false");
    } else {
      setList("true");
    }
  };
  return (
    <div>
      <Navbar1>
        <div>
          <div>
            <img src="https://img.icons8.com/color/48/000000/microsoft.png" alt="#"/>
            <span>Microsoft Bing</span>
          </div>
          <ul>
            <li>Images</li>
            <li>Videos</li>
            <li>Translate</li>
            <li>. . .</li>
          </ul>
        </div>
        <ul>
          <li>Rajdeep</li>
          <li>
            <svg
              class="bnc-hci"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
                <img src="https://img.icons8.com/ios/50/user--v1.png" alt="" srcset="" />
              <path
                fill="#fff"
                d="M14 19h-.5v-5a5.98 5.98 0 00-1.76-4.24A5.98 5.98 0 007.5 8a5.98 5.98 0 00-4.24 1.76A5.98 5.98 0 001.5 14v5H1a1 1 0 000 2h4v.5a2.5 2.5 0 005 0V21h4a1 1 0 000-2zm-6 2.5a.5.5 0 01-1 0V21h1v.5zM3.5 19v-5a3.98 3.98 0 011.17-2.83A3.98 3.98 0 017.5 10a3.98 3.98 0 012.83 1.17A3.98 3.98 0 0111.5 14v5h-8z"
              ></path>
            </svg>
          </li>
          <li onClick={showList}>
            <img src="https://img.icons8.com/material-outlined/24/ffffff/todo-list--v1.png" alt="#"/>
          </li>
        </ul>
      </Navbar1>
      <Dropdown list = {list}>
      <li>Setting</li>
      <li>SafeSearch</li>
      <li>Search History</li>
      <li>My Bing</li>
      <li>Privacy</li>
      <li>Feedback</li>
      </Dropdown>
    </div>
  );
};

export default Navbar;

const Navbar1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  margin: auto;
  & div {
    display: flex;
    width: 70%;
    align-items: center;
    // justify-content: space-evenly;
    & div {
      display: flex;
      width: 20%;
      align-items: center;
      & span {
        color: white;
      }
      & img {
        height: 25px;
        width: 30px;
      }
    }
    & ul {
      display: flex;
      align-items: center;
      width: 50%;
      justify-content: space-evenly;
    }
  }
  & ul {
    display: flex;
    align-items: center;
    width: 20%;
    justify-content: space-around;
  }
`;

const Dropdown = styled.div`
 display : ${({list}) => (list == "true" ? "block" : "none") };
 width:10%;
 position: absolute;
 right : 170px;
 background-color: white;
 color: black;
 padding: 10px;
 border-radius: 5px;
 & li {
     padding : 5px;
 }
`