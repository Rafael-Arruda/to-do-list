import styled from "styled-components";

export const Container = styled.div`
    padding: 30px 0px;

    .input_area {
        width: 70%;
        margin: 0 auto;
        background-color: #fff;
        border: 1px solid #ddd;
        padding: 25px 10px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        input {
            width: 90%;
            height: 40px;
            padding: 10px;
            outline: none;
        }

        button {
            margin-left: 10px;
            width: 40px;
            height: 40px;
            color: #fff;
            background-color: #008584;
            border: 0;
            border-radius: 4px;
            cursor: pointer;
            font-size: 20px;
            transition: 0.3s all;
        }
        button:active {
            transform: scale(0.9);
        }
    }

    @media screen and (min-width: 300px) and (max-width: 600px) {
        .input_area {
            width: 90%;
        }
    }
`;

export const List = styled.div`
    width: 70%;
    margin: 8% auto;
    border: 1px solid #ddd;
    padding: 25px 10px;
    background-color: #fff;

    .list_items div {
        padding: 10px 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            font-size: 1rem;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }

        button {
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
    }

    .list_items div:not(:first-child){
        border-top: 1px solid #ddd;
    }

    @media screen and (min-width: 300px) and (max-width: 600px) {
        width: 90%;
    }

    
`;
