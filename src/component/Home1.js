import React , { useState } from 'react';
import '../component/home1.css';
import Blacklogo from '../images/Blacklogo.png';
import doctor from '../images/doctor.png';
import user from '../images/user.png';
import android from '../images/Android.png';
const Home1 = () => {
  const [docVisible, setDocVisible] = useState(true);
  const [userVisible, setUserVisible] = useState(true);

  const toggleDocVisibility = () => {
    setDocVisible(!docVisible);
  };

  const toggleUserVisibility = () => {
    setUserVisible(!userVisible);
  };
  return (
    <div>
      <div className='background'>
        <img src="https://img.freepik.com/free-photo/neurological-doctor-cheking-eeg-headset-explaining-patient-diagnosis-disease-treatment-nervous-system-scientist-researcher-analysing-brain-scan-tomography-monitor-lab_482257-13083.jpg?w=1380&t=st=1695395289~exp=1695395889~hmac=d00575a939a3c0251ff0e62be0b7fa2db77210e75e813c311d424f19d526966c" alt="background image" />
      </div>
      <div className='logo'>
        <img src={Blacklogo} alt='logo'></img>
      </div>
      <div className='doc'>
        <img src={doctor} alt='doc'>
        </img>
      </div>
      {/* <div className='home-logo'>
        <img src={android} style={{width}} alt='home'></img>
      </div> */}
      <div className='user'>
        <img src={user} alt='user'></img>
      </div>
      <div className='doc-button'>
      <button onClick={toggleDocVisibility}>Doctor</button>
      </div>
      <div className='user-button'>
      <button onClick={toggleUserVisibility}>Guardian</button>
      </div>
    </div>
  );
};

export default Home1;
