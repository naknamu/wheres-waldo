import styled from "styled-components";

const ViewBox = (props) => {
  return (
    <StyledBox>
      <StyledElement disabled={props.status.first}>
        {props.TARGET.first}
      </StyledElement>
      <StyledElement disabled={props.status.second}>
        {props.TARGET.second}
      </StyledElement>
      <StyledElement disabled={props.status.third}>
        {props.TARGET.third}
      </StyledElement>
    </StyledBox>
  );
};

export default ViewBox;

const StyledBox = styled.div`
  width: 20rem;
  position: absolute;
  z-index: 200;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 6px;
  border: 1px solid white;
  font-size: 18px;

  left: -8rem;
  top: 7rem;
`;

const StyledElement = styled.div`
  cursor: pointer;
  padding: 1rem;
  border: 1px solid white;

  border: 1px dashed ${({ theme }) => theme.colors.primary};

  color: ${(props) => (props.disabled ? "darkred" : props.theme.colors.primary)};
  
  text-decoration: ${(props) =>
    props.disabled ? "line-through black double 3px" : "none"};

  background-color: ${(props) =>
    props.disabled ? "gray" : props.theme.colors.light};
`;
