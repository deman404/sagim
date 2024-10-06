import { Dropdown } from "antd";
import React from "react";
import styled from "styled-components";
import { IoLogIn, IoHome,IoChatbubblesSharp,IoBook,IoDice } from "react-icons/io5";

const DropDown = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <ul className="list">
          <li className="element">
            <IoHome size={20} />
            <p className="label">Home</p>
          </li>
          <li className="element">
            <IoDice size={20} />
            <p className="label">About Us</p>
          </li>
        </ul>
        <ul className="list">
          <li className="element">
            <IoBook size={20}/>
            <p className="label">Services</p>
          </li>
          <li className="element">
            <IoChatbubblesSharp size={20}/>
            <p className="label">Contact</p>
          </li>
        </ul>
        <ul className="list">
          <li className="element">
            <IoLogIn size={20} />
            <p className="label">Login</p>
          </li>
        </ul>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 250px;
    /* background-color: rgba(36, 40, 50, 1);
background-image: linear-gradient(135deg, rgba(36, 40, 50, 1) 0%, rgba(36, 40, 50, 1) 40%, rgba(37, 28, 40, 1) 100%); */

    background-color: rgba(36, 40, 50, 1);
    background-image: linear-gradient(
      139deg,
      rgba(36, 40, 50, 1) 0%,
      rgba(36, 40, 50, 1) 0%,
      rgba(37, 28, 40, 1) 100%
    );

    border-radius: 10px;
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 70px;
    right: 10px;
    z-index: 1000;
  }

  .card .separator {
    border-top: 1.5px solid #42434a;
  }

  .card .list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0px 10px;
    margin: 0;
  }

  .card .list .element {
    display: flex;
    align-items: center;
    color: #7e8590;
    gap: 10px;
    transition: all 0.3s ease-out;
    padding: 0px 7px;
    border-radius: 6px;
    cursor: pointer;
  }

  .card .list .element svg {
    width: 19px;
    height: 19px;
    transition: all 0.3s ease-out;
  }

  .card .list .element .label {
    font-weight: 16;
  }

  .card .list .element:hover {
    background-color: #5353ff;
    color: #ffffff;
    transform: translate(1px, -1px);
  }
  .card .list .delete:hover {
    background-color: #8e2a2a;
  }

  .card .list .element:active {
    transform: scale(0.99);
  }

  .card .list:not(:last-child) .element:hover svg {
    stroke: #ffffff;
  }

  .card .list:last-child svg {
    stroke: #bd89ff;
  }
  .card .list:last-child .element {
    color: #bd89ff;
  }

  .card .list:last-child .element:hover {
    background-color: rgba(56, 45, 71, 0.836);
  }
`;

export default DropDown;
