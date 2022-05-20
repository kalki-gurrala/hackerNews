import React from "react";
import "./DetailPage.css";
import parse from "html-react-parser";
import Typewriter from "typewriter-effect";

function DetailPage(props) {
  return (
    <div className="details">
      <div className="detailData">
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(`${props.detailPageData.title}`)
                .pauseFor(2000)
                .start()
                .deleteAll()
                .typeString(`${props.detailPageData.title}`);
            }}
          />
        </h1>
        <h1>{props.detailPageData.points}</h1>
        <h3 className="child">
          {props.detailPageData.children.map((item) => {
            return (
              <div key={item.id}>
                <ul>{parse(`<li>${item.text}</li>`)}</ul>
              </div>
            );
          })}
        </h3>
      </div>
    </div>
  );
}

export default DetailPage;
