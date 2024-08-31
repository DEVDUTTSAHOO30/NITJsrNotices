"use client";

import React from "react";
import "./members-container.css";

export default function Members({designation, data}) {
  return (
    <>
      <div className="member_container">
        <h3 className="member_designation">{designation}</h3>
        <div className="bar_container">
          <div id="left_bar"></div>
          <div id="middle_bar"></div>
          <div id="right_bar"></div>
        </div>
        <div className="members">
            {data.map((a) => (
                <div className={"member_box" + (a.id === 2 ? "2" : "")} key={a.id}>
                    <p>
                    <b className="member_name">{a.name} </b>
                    <br></br>
                    </p>
                    <p className="member_description">
                    {a.other_info}
                    </p>
                    <br />
                </div>
            ))}
        </div>
        <hr />
      </div>

    </>
  );
}
