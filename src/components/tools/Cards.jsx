import React from "react";
import styled from "styled-components";
import { IoChevronForwardOutline } from "react-icons/io5";
import useWindowSize from "../../Hooks/useWindowSize";
const Card = ({ title, offer1, link, image, offer2, offer3 }) => {
  const size = useWindowSize();
  return (
    <StyledWrapper>
      <div className="card" style={{ height: size.width > 800 ? 330 : 280 }}>
        <div className="image">
          <img src={image} alt="image" />
        </div>
        <div className="content">
          <a href="#">
            <h3
              className="title"
              style={{ fontSize: size.width > 800 ? 18 : 14 }}
            >
              {title}
            </h3>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    max-width: 250px;
    background: rgba(74, 144, 226, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin: 0 5px 5px 0;
    height: 330px;
  }
  .card:hover {
    box-shadow: 0 8px 32px 0px rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    cursor: pointer;
    transform: translateY(4px);
  }
  .card a {
    text-decoration: none;
  }

  .content {
    padding: 1.1rem;
  }

  .image img {
    object-fit: cover;
    width: 100%;
    height: 150px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .title {
    color: #fff;
    font-size: 18px;
    width: 100%;
    margin: 0;
    height: 100px;
  }

  .desc {
    margin-top: 0.5rem;
    color: #fff;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .action {
    display: inline-flex;
    margin-top: 1rem;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    align-items: center;
    gap: 0.25rem;
    background-color: #2563eb;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .action span {
    transition: 0.3s ease;
  }

  .action:hover span {
    transform: translateX(4px);
  }
`;

export default Card;
