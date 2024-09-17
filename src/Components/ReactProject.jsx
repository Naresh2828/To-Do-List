import React, { useState } from "react";
import "./bdlist.css"
function ReactProject() {
    const [bdlist, setbdlist] = useState([
        {
            id: 1,
            name: 'Bertie Yates',
            age: 29,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        },
        {
            id: 2,
            name: 'Hester Hogan',
            age: 32,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
        },
        {
            id: 3,
            name: 'Larry Little',
            age: 36,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        },
        {
            id: 4,
            name: 'Sean Walsh',
            age: 34,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        },
        {
            id: 5,
            name: 'Lola Gardner',
            age: 29,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        },
    ]);
    const handleclear=()=>{
        setbdlist([])
    }

    return (
        <div className="cr">
        <div className="container">
            <h1>{bdlist.length} Birthday List Today</h1>
            <div className="section">
                {bdlist.map((pr) => (
                    <div>
                        <img className="ImageCss" src={pr.image} />
                        <div className="ed">
                        <span>{pr.name}</span>
                        
                        <span>{pr.age}   years</span>
                    </div>
                    
                    </div>

                ))}
                <div className="button">
                <button onClick={handleclear}><div></div>Clear All</button>
            </div> 
            </div>

        </div>
        </div>
    )
}
export default ReactProject