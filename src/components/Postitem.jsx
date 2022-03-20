import React from "react";

const Postitem = () => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>Javascript</strong>
                <div>Javascript - это язык программирования</div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default Postitem;