import React from "react";

const Postitem = (props) => {
    console.log(props);
    return (
        <div className="post">
        <div className="post__content">
          <h4 className="post__title">{props.post.id}. {props.post.title}</h4>
          <div className="post__description">{props.post.body}</div>
        </div>
        <div className="post__bt">
          <button className="post__button">Удалить</button>
        </div>
      </div>
    );

}

export default Postitem;