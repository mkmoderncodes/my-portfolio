import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import "./About.css";
const About: React.FC = () => {
	const navigate = useNavigate();
	return (
		<motion.div className="About-container shadow-2xl rounded-lg mx-8 relative bottom-8 border-2 pb-10">
			<motion.div
				className="custom-font mt-9 pt-20 text-lg text-center"
				initial={{ opacity: 0, y: 100, scale: 0.2 }}
				whileInView={{
					y: 0,
					opacity: 1,
					scale: 0.85,
					transition: {
						duration: 2,
						delay: 0.5,
					},
				}}>
				<p>
					I&apos;m a Fullstack Developer skilled in Javascript, ReactJs, NextJs,
					Node.js Express, and Tailwindcss, with experience in
				</p>
				<p>
					database management using Firebase and MongoDB. I focus on building
					scalable, user-centered applications that solve
				</p>
				<p>real business challenges</p>
				<hr className="horizontal" />
			</motion.div>
			<motion.div
				className="py-8 border-2 my-5 mx-20 rounded-lg cursor-pointer"
				initial={{ opacity: 0, y: 100 }}
				whileInView={{
					y: 0,
					opacity: 1,
					transition: {
						duration: 2,
						delay: 0.5,
					},
				}}
				whileHover={{
					scale: 0.9,
					backgroundColor: "GrayText",
					color: "white",
					transition: { easings: "easeInOut" },
				}}>
				<motion.h2
					className="font-bold text-center"
					initial={{ opacity: 0, y: 59, scale: 0.5 }}
					whileInView={{
						opacity: 1,
						y: 0,
						scale: 1,
						transition: {
							duration: 2,
							delay: 1.5,
						},
					}}
					onClick={() => navigate("/projects/web-design")}>
					Web Development
				</motion.h2>
				<motion.p
					className="text-center"
					initial={{ opacity: 0, y: 59.99, scale: 0.5 }}
					whileInView={{
						opacity: 1,
						y: 0,
						scale: 1,
						transition: {
							duration: 2,
							delay: 2,
						},
					}}>
					Build and maintained dynamic web applications
				</motion.p>
			</motion.div>
			<motion.div
				className="border-2 mx-20 rounded-lg py-8 cursor-pointer my-5"
				initial={{ opacity: 0, y: 100 }}
				whileInView={{
					y: 0,
					opacity: 1,
					transition: {
						duration: 2,
						delay: 0.5,
					},
				}}
				whileHover={{
					scale: 0.9,
					backgroundColor: "GrayText",
					color: "white",
					transition: { easings: "easeInOut" },
				}}>
				<motion.h2
					onClick={() => navigate("/projects/full-stack")}
					className="font-bold text-center"
					initial={{ opacity: 0, y: 59.99, scale: 0.5 }}
					whileInView={{
						opacity: 1,
						y: 0,
						scale: 1,
						transition: {
							duration: 2,
							delay: 2.5,
						},
					}}>
					Full-Stack Development
				</motion.h2>
				<motion.p
					className="text-center"
					initial={{ opacity: 0, y: 59.99, scale: 0.5 }}
					whileInView={{
						opacity: 1,
						y: 0,
						scale: 1,
						transition: {
							duration: 2,
							delay: 3,
						},
					}}>
					Developed end-to-end solutions using React, Node.js and MongoDB
				</motion.p>
			</motion.div>
		</motion.div>
	);
};
export default About;
