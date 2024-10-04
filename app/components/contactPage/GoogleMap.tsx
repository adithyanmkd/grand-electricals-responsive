import React from "react";

const GoogleMap = () => {
  return (
    <div>
      {/* <iframe
        className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3917.870874001519!2d76.53638889999999!3d10.897416699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDUzJzUwLjciTiA3NsKwMzInMTEuMCJF!5e0!3m2!1sen!2sin!4v1726038287587!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <iframe
        className="h-[300px] w-[300px] md:h-[500px] md:w-[500px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.870360193215!2d76.53164947996169!3d10.89745572927602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8799ac56344c3%3A0xa669e5b836d9ea32!2sGrand%20Electricals!5e0!3m2!1sen!2sin!4v1728020521565!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
