/* eslint-disable prefer-const */
import states from './data/states.json';
import sunset from './images/sunset.png';

export const App = () => {
	const title = "Vite React Site";
	let userType = "admin";
	return (
		<>
			<h1>{title}</h1>
			<img src={sunset}/>
			<div className="highlighted">hello</div>
			{userType === "admin" ? (
				<div>this is the admin info</div>
			) : (
				<div>normal user info</div>
			)}
<hr/>
<img src="images/code.png"/>
<hr/>

			<h2>German States</h2>
			{states.map((state,index) => (
				<div key={index}>{state} ({index})</div>
			))}
			<hr />
			{/* {states.map(state => {
				return (
					<div key={state}>{state}</div>
				)
			})} */}
		</>
	);
};
