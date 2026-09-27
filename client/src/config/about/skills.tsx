import { FaCode, FaDatabase, FaChartBar, FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

export const skills = [
	{
		title: "Software Engineering & System Development",
		description: "Designing and building clean, reliable software systems that solve practical problems.",
		icon: <FaCode className="text-3xl text-cyan-400" />,
	},
	{
		title: "Data Analysis & Visualization",
		description: "Turning complex datasets into useful dashboards and insights with Power BI, DAX, Excel, and Power Query.",
		icon: <FaChartBar className="text-3xl text-yellow-400" />,
	},
	{
		title: "Database Design & Management",
		description: "Designing structured databases and writing SQL queries for dependable data workflows with .NET Core integration.",
		icon: <FaDatabase className="text-3xl text-blue-400" />,
	},
	{
		title: "Python Data Processing",
		description: "Cleaning, transforming, and visualizing data with Pandas, NumPy, Matplotlib, and Seaborn.",
		icon: <FaPython className="text-3xl text-green-400" />,
	},
	{
		title: "Competitive Programming",
		description: "Applying C++, C#, data structures, algorithms, and systematic problem-solving techniques.",
		icon: <SiCplusplus className="text-3xl text-indigo-400" />,
	},
];