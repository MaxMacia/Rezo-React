import styled from "styled-components";
import colors from "../../utils/styles/colors";

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    margin-top: 20px;
`;

export const ListItem = styled.li`
    width: 30%;
    margin-right: 16px;
    padding-bottom: 5px;
    font-size: 1.5em;
    text-align: center;
    cursor: pointer;
    ${props => props.selected && `border-bottom: solid 2px ${colors.tertiary}`}
`;