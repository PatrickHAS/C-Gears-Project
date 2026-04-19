import styled from "styled-components";

export const StyledDropdownCountries = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;

  background: var(--Black-0);
  border: 1px solid var(--Indigo-9);
  border-radius: 5px;
  margin-top: 5px;

  width: 100%;
  max-height: 90vh;
  height: 290px;

  overflow-y: auto;
  overflow-x: hidden;

  transform-origin: top;
  animation: cascadeOpen 0.6s ease-out forwards;

  @keyframes cascadeOpen {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background: var(--Gray-9);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }

  @media (min-width: 550px) {
    width: 350px;
  }

  .countries-list {
    display: flex;
    flex-direction: column;
    align-items: start;

    width: 100%;
    padding: 10px 0;

    list-style: none;

    .country-item {
      width: 100%;
      padding: 10px 10px;
      color: var(--Gray-0);

      font-size: 10px;
      font-family: "Orbitron";
      font-style: normal;
      font-weight: 600;
      letter-spacing: 1px;

      cursor: pointer;
    }

    .country-item:hover {
      background: var(--Indigo-9);
      transition: 0.7s;
    }
  }
`;
