// eslint-disable-next-line no-unused-vars
import React from "react";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
const QZone = () => {
  return (
    <>
      <h4 className="mb-4">QZone</h4>
      <div className="qzone-pics text-center">
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </>
  );
};

export default QZone;
