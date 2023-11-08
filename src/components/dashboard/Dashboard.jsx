import "./Dashboard.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";

const Dashboard = () => {
  const {
    setLink,
    boxColor,
    setBoxColor,
    currentOrder,
    setOrder,
    footerText,
    setFooter,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const setFooterText = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFooter((prev) => {
      const newFooter = { ...prev, [name]: value };
      localStorage.setItem("footerText", JSON.stringify(newFooter));
      return newFooter;
    });
  };

  const setImage = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLink((prev) => {
      const newLink = { ...prev, [name]: value };
      localStorage.setItem("link", JSON.stringify(newLink));
      return newLink;
    });
  };

  const handleColorChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBoxColor((prev) => {
      const newBoxColor = { ...prev, [name]: value };
      localStorage.setItem("boxColor", JSON.stringify(newBoxColor));
      return newBoxColor;
    });
  };

  const handleOrderChange = (e) => {
    const name = e.target.name;
    const value = parseInt(e.target.value, 10);
    setOrder((prev) => {
      const newOrder = { ...prev, [name]: value };
      localStorage.setItem("currentOrder", JSON.stringify(newOrder));
      return newOrder;
    });
  };

  const LogOut = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="dashboard-container">
      <div className="section-settings">
        <div className="title">
          <h2>Slider</h2>
          <button>ON/OFF</button>
        </div>
        <div className="settings">
          <button onClick={LogOut}>Log out</button>

          {[1, 2, 3].map((num) => (
            <input
              key={num}
              name={num.toString()}
              onChange={setImage}
              type="text"
              placeholder={`${num}st Link`}
            />
          ))}

          <div className="color-picker">
            {["Box one", "Box two", "Box three"].map((label, index) => (
              <div key={index}>
                <h4>{label}</h4>
                <input
                  type="color"
                  name={(index + 1).toString()}
                  className="colorPicker"
                  value={boxColor[index + 1]}
                  onChange={handleColorChange}
                />
              </div>
            ))}

            <h4>Order Changer</h4>
            {[1, 2, 3].map((num) => (
              <input
                key={num}
                type="number"
                name={num.toString()}
                className="orderPicker"
                value={currentOrder[num]}
                onChange={handleOrderChange}
              />
            ))}

            <h4>Footer text changer</h4>
            <input
              type="text"
              name="1"
              className="picker"
              value={footerText[1]}
              onChange={setFooterText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
