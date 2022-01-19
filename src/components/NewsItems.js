import React from "react";

export default function NewsItems(props) {
  // this is object destructuring props ehich is obtained as an object is destructured by object on left 
  // provided we dont need to write props. before 
    let { title, description, img, url } = props;
    return (
      <div>
        <div className="card m-3" style={{ width: "18rem" }}>
          <a
            href={url}
            style={{ textDecoration: "none" }}
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src={
                !img
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCtwT47bCEnBvm9oPqZRUATjHQ7_jb6UnFg&usqp=CAU"
                  : img
              }
              className="card-img-top"
              alt="..."
            />
          </a>
          <div className="card-body">
            <h4>{title}</h4>
            <p className="card-text">
              {description}
              <a
                href={url}
                style={{ textDecoration: "none" }}
                target={"_blank"}
                rel="noreferrer"
              >
                ...Read more
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

