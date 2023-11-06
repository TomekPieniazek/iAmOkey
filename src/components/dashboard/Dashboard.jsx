import './Dashboard.scss';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

const Dashboard = () => {
   const {
       setLink,
       boxColor,
       setBoxColor,
       currentOrder,
       setOrder,
       footerText,
       setFooter
   } = useContext(AppContext);

   const navigate = useNavigate();

   const setFooterText = (e) => {
       setFooter(prev => ({ ...prev, [e.target.name]: e.target.value }));
       localStorage.setItem('footerText', JSON.stringify(e.target.value));
   }

   const setImage = (e) => {
       setLink(prev => ({ ...prev, [e.target.name]: e.target.value }));
       localStorage.setItem('link', JSON.stringify(e.target.value));
   }

   const handleColorChange = (e) => {
       setBoxColor(prev => ({ ...prev, [e.target.name]: e.target.value }));
       localStorage.setItem('boxColor', JSON.stringify(e.target.value));
   }

   const handleOrderChange = (e) => {
       setOrder(prev => ({ ...prev, [e.target.name]: parseInt(e.target.value, 10) }));
       localStorage.setItem('currentOrder', JSON.stringify(e.target.value));
   }

   const LogOut = () => {
       navigate("/", { replace: true });
   }

   return (
       <div className="dashboard-container">
           <div className="section-settings">
               <div className="title">
                   <h2>Slider</h2>
                   <button>ON/OFF</button>
               </div>
               <div className="settings">
                   <button onClick={LogOut}>Log out</button>

                   {[1, 2, 3].map(num => (
                       <input
                           key={num}
                           name={num.toString()}
                           onChange={setImage}
                           type='text'
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
                       {[1, 2, 3].map(num => (
                           <input
                               key={num}
                               type='number'
                               name={num.toString()}
                               className='orderPicker'
                               value={currentOrder[num]}
                               onChange={handleOrderChange}
                           />
                       ))}

                       <h4>Footer text changer</h4>
                       <input
                           type='text'
                           name="1"
                           className='picker'
                           value={footerText[1]}
                           onChange={setFooterText}
                       />
                   </div>
               </div>
           </div>
       </div>
   );
}

export default Dashboard;
