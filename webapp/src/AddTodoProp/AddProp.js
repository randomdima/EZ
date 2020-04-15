
import React, { useState, useEffect } from "react";

function AddProp(prop) {

    // const [props, setProps] = useState({});

    // async function fetchData() {
    //     const res = await fetch(prop.todoItem.url);
    //     res
    //         .json()
    //         .then(res => setProps(res))
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);
    console.log(prop.todoItem.url)

    return (
        <div>
            <span>{prop.todoItem.url}</span>
            <hr />
        </div>
    );
};
export default AddProp;