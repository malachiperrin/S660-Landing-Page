
export default function BusinessHourItem(props) {
	return (
        <ul style={{width: "100%"}}>
          <li className="has-text-weight-bold is-justify-content-space-between" style={{display: "inline-flex", width: "100%", fontSize: "2rem"}}>{props.weekday}<span>{props.hours}</span></li>
        </ul>
	)
}
