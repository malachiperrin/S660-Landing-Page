import BusinessHourItem from "../BusinessHourItem/BusinessHourItem.js";

const DUMMY_HOUR_DATA = {
	Sunday: "9:00AM - 7:00PM","Monday": "9:00AM - 7:00PM",
	Tuesday: "9:00AM - 7:00PM","Wednesday": "9:00AM - 7:00PM",
	Thursday: "9:00AM - 7:00PM","Friday": "9:00AM - 7:00PM",
	Saturday: "9:00AM - 7:00PM"
};

export default function BusinessHoursContainer() {

   return (	
      <div className="is-flex is-align-items-center is-flex-direction-column p-4">
        <h4 className="title">Get In Touch</h4>
        <p className="subtitle">Contact our Sales Departmet</p>
	 
      {
	    Object.keys(DUMMY_HOUR_DATA).map(key => {
	    	    	    	       return  <BusinessHourItem weekday={key} hours={DUMMY_HOUR_DATA[key]} />   				     
	    	    	    	    })
      }

        <button className="button">Contact</button>
      </div>
    )
}
