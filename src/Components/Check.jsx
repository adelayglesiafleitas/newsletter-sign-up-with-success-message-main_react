import ImgCheck from "../assets/assets/images/icon-success.svg";

const Check = ({ text }) => {
  return (
    <div className="container_Check">
      <img src={ImgCheck} alt="img-logo" />
      <p className=" roboto__bold">{text}</p>
    </div>
  );
};

export default Check;
