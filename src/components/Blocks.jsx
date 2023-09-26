import React, { useState } from "react";
import "../App.css";

export default function Blocks() {
    const [string, setString] = useState("");
    const [number, setNumber] = useState(0);

    const limitBlocks = (arr) => {
        const arrBlock = [];

        arr.forEach((letter, index) => {
            if (!arrBlock.length) {
                arrBlock.push([letter]);
                return;
            }
            if (letter === arrBlock[arrBlock.length - 1][0]) {
                arrBlock[arrBlock.length - 1].push([letter]);
                return;
            } else {
                arrBlock.push([letter]);
            }
        });

        const sortArray = arrBlock.sort((a, b) => b.length - a.length);

        setNumber(
            (sortArray[0]?.length ?? 0) +
            (sortArray[1]?.length ?? 0) +
            (sortArray[2]?.length ?? 0)
        );
    };

    const checkBlocks = (arr, number) => {
        const newArr = [...arr];
        if (number > newArr.length) {
            limitBlocks(newArr);
            return;
        }

        if (newArr[number] === newArr[number + 1]) {
            checkBlocks(newArr, number + 2);
        } else {
            const equalLetterIndex = newArr
                .slice(number + 1, newArr.length)
                .findIndex((letter) => {
                    return newArr[number] === letter;
                });

            if (equalLetterIndex > 0) newArr.splice(number + 1, equalLetterIndex);
            checkBlocks(newArr, number + 1);
        }
    };

    return (
        <div className="card">
            <h4>Task 1</h4>
            <input onChange={(e) => setString(e.target.value)} />
            <br />
            <br />
            <button onClick={() => checkBlocks(string.split(""), 0)}>Check String</button>
            <p>{number}</p>
        </div>
    );
};
