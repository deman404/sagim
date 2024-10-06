import React from "react";
import styled from "styled-components";

const Card2 = () => {
  return (
    <StyledWrapper>
      <div className="bgblue">
        <div className="card2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          molestiae explicabo placeat atque praesentium, dolorum corporis amet
          non, aliquid quasi voluptate delectus nulla exercitationem eius eum,
          ducimus architecto dolores suscipit!
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .bgblue {
  background: linear-gradient(135deg, #fffffff5, #3a4b8a, #ffffff98);
  padding: 1px;
  border-radius: 1.2rem;
  box-shadow: 0px 1rem 1.5rem -0.9rem #000000e1;
  max-width: 250px;
}

.card2{
  font-size: 1rem;
  color: #bec4cf;
  background: linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%);
  padding: 1.5rem;
  border-radius: 1.2rem;
}

`;

export default Card2;
