import React, { useEffect, useState } from "react";


const Fetch = () => {
    const [, setAdvice] = useState("");

    useEffect(() => {
        const url = "https://dummyjson.com/products";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.slip.advice);
                setAdvice(json.slip.advice);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Wrapper>
            <Paragraph>{advice}</Paragraph>
        </Wrapper>
    );
};

export default Fetch;
