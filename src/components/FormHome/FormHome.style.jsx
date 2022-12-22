import styled from "styled-components";
import colors from "../../utils/styles/colors";

export const Form = styled.form`
    margin-top: 20px;
    padding-top: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 300px;
    width: 90%;
    text-align: center;
    margin-left: 20px;
    background-color: #FFF;
    box-shadow: ${colors.boxShadow};;
`;

export const Fields = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
`;