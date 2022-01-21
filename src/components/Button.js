import styled from 'styled-components';

const button = styled.button`
  color: black;
  padding: 10px;
  background-color: #ffd82b;
  width: 100px;
  height: 25px;
  border-radius: 25px;
`;

const Button = (props) => {
  return (
    <button type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
