/* eslint-disable prefer-const */
export const App = () => {
	const title = "Vite React Site";
	let userType = "admin";
	return (
		<>
			<h1>{title}</h1>
			<div className="highlighted">hello</div>
			{userType === "admin" ? (
				<div>this is the admin info</div>
			) : (
				<div>normal user info</div>
			)}
		</>
	);
};
