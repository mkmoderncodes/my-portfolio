import Allitems from "./Allitems";
import './project.css'
const WebDesign: React.FC = () => {
	const onlyWeb = Allitems[2];
	return (
		<>
			<div className="web shadow-2xl rounded-lg mx-8 relative bottom-8 border-2 pb-10">
				<div className="webItems mt-1 ml-10 pt-20 text-lg grid grid-cols-4 gap-5 justify-center items-center space-x-3">
					<div
						className="webItem shadow-lg border-2 px-4 py-3 rounded-lg"
						style={{ width: "88%" }}>
						<h3 className="uppercase font-bold opacity-70 text-center">
							{onlyWeb.name}
						</h3>
						<img
							src={onlyWeb.image}
							alt={onlyWeb.name}
							style={{ width: "100%", height: "30vh", padding: "20px" }}
						/>
						<div className="flex space-x-2">
							<p
								className="bg-gray-300 px-1 rounded-lg font-bold"
								style={{ width: "35.9%" }}>
								React.js
							</p>
							<p
								className="bg-gray-300 px-2 rounded-lg font-bold"
								style={{ width: "55.9%" }}>
								Tailwindcss
							</p>
						</div>
						<a
							href={onlyWeb.github}
							target="_blank"
							rel="noopener noreferrel"
							className="bg-blue-300 hover:bg-blue-700 px-2 rounded-lg font-bold mt-2">
							GitHub
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
export default WebDesign;
