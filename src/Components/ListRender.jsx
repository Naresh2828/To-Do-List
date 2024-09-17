import React, { useState } from "react";
function ListRender() {
    const studentdetails = [
        {
            name: "reena",
            age: 26,
            image:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTQI--x3RbpvD1MJNuWrYSNaHhD-SyOwXvvtP7VIg2GV8hANisvdJvBTUv2NGnpL7adzRNiM57DDW_7VVI"
        },
        {
            name: "rocky",
            age: 26
        },
        {
            name: "teju",
            age: 26
        },
        {
            name: "naveen",
            age: 26
        },
        {
            name: "anitha",
            age: 26
        }

    ]
    const [data, setdata] = useState(studentdetails)
    return (
        <div>
            <h1>List</h1>
            <ol>
                {data.map((data ) => (
                    <div>
                        <img src={data.image}/>
                        <h1>{data.name}-{data.age}</h1>
                    </div>
                ))}
            </ol>
        </div>
    );
}
export default ListRender;