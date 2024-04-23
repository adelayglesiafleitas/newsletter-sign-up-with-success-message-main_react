import IconSucces from "../assets/assets/images/icon-success.svg";
const Succes = ({ setSucces }) => {
  const handleClick = () => {
    setSucces(true);
  };
  return (
    <>
      <section className="container_Succes">
        <div className="container_Succes_div">
          <img src={IconSucces} alt="icon_succes" />
          <h2 className="roboto__bold">Thanks for subscribing!</h2>
          <h3 className="roboto__regular">
            A confirmation email has been sent to{" "}
            <span className="roboto__bold">ash@loremcompany.com.</span> Please
            open it and click the button inside to confirm your subscription.
          </h3>
          <button className="roboto__bold" onClick={handleClick}>
            Dismiss message
          </button>
        </div>
      </section>
    </>
  );
};

export default Succes;
