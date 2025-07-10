import { FaBullseye, FaGraduationCap, FaChartBar, FaProjectDiagram, FaBookOpen } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineAssessment, MdOutlineAlignVerticalBottom } from 'react-icons/md';

const OBEPage = () => {
    return (
        <div className="font-sans bg-gray-50">
            {/* Hero Section */}
            <section className="relative py-32 bg-cover bg-center text-white overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Outcome-Based Education</h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"></div>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Our systematic approach to education that focuses on measuring student achievement through outcomes
                        </p>
                    </div>
                </div>
            </section>

            {/* OBE Introduction */}
            <section className="relative py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our OBE Framework</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                CATALYST College has implemented a robust Outcome-Based Education system aligned with NBA standards to ensure
                                our graduates meet industry expectations and global competencies
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {[
                                {
                                    icon: <FaBullseye className="text-4xl mb-4 text-blue-600" />,
                                    title: "Clear Objectives",
                                    description: "Explicitly defined outcomes at program and course levels"
                                },
                                {
                                    icon: <GiSkills className="text-4xl mb-4 text-indigo-600" />,
                                    title: "Skill Focused",
                                    description: "Emphasis on demonstrable skills and competencies"
                                },
                                {
                                    icon: <FaChartBar className="text-4xl mb-4 text-purple-600" />,
                                    title: "Continuous Assessment",
                                    description: "Regular measurement of outcome attainment"
                                }
                            ].map((feature, index) => (
                                <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-lg transition-shadow border border-gray-100">
                                    <div className="flex justify-center">{feature.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mt-4">{feature.title}</h3>
                                    <p className="text-gray-600 mt-2">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* OBE Components */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-2">OBE Components</span>
                            Our Outcome-Based Education Structure
                        </h2>

                        {/* PEOs */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12 border border-blue-100">
                            <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                                        <FaGraduationCap className="text-blue-600 text-xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Program Educational Objectives (PEOs)</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-6">
                                    Broad goals that describe what graduates are expected to achieve within 3-5 years after graduation
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "PEO1: Professional Excellence",
                                            description: "Graduates will excel in professional careers through technical competence and problem-solving skills"
                                        },
                                        {
                                            title: "PEO2: Higher Education",
                                            description: "Graduates will succeed in advanced studies and research endeavors"
                                        },
                                        {
                                            title: "PEO3: Leadership & Ethics",
                                            description: "Graduates will demonstrate leadership, teamwork and professional ethics"
                                        },
                                        {
                                            title: "PEO4: Lifelong Learning",
                                            description: "Graduates will engage in continuous learning and professional development"
                                        }
                                    ].map((peo, index) => (
                                        <div key={index} className="bg-blue-50/30 p-4 rounded-lg border border-blue-200/50">
                                            <h4 className="font-semibold text-blue-700 mb-2">{peo.title}</h4>
                                            <p className="text-gray-600 text-sm">{peo.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* POs */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12 border border-indigo-100">
                            <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-200">
                                <div className="flex items-center">
                                    <div className="bg-indigo-100 p-2 rounded-full mr-4">
                                        <FaProjectDiagram className="text-indigo-600 text-xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Program Outcomes (POs)</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-6">
                                    What students are expected to know and be able to do by the time of graduation (aligned with NBA criteria)
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Outcome</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NBA Alignment</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {[
                                                { code: "PO1", outcome: "Engineering Knowledge", nba: "1.1" },
                                                { code: "PO2", outcome: "Problem Analysis", nba: "2.1" },
                                                { code: "PO3", outcome: "Design/Development of Solutions", nba: "3.1" },
                                                { code: "PO4", outcome: "Investigation of Complex Problems", nba: "4.1" },
                                                { code: "PO5", outcome: "Modern Tool Usage", nba: "5.1" },
                                                { code: "PO6", outcome: "Engineer and Society", nba: "6.1" },
                                                { code: "PO7", outcome: "Environment & Sustainability", nba: "7.1" },
                                                { code: "PO8", outcome: "Ethics", nba: "8.1" },
                                                { code: "PO9", outcome: "Individual & Team Work", nba: "9.1" },
                                                { code: "PO10", outcome: "Communication", nba: "10.1" },
                                                { code: "PO11", outcome: "Project Management", nba: "11.1" },
                                                { code: "PO12", outcome: "Life-long Learning", nba: "12.1" }
                                            ].map((po, index) => (
                                                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">{po.code}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-600">{po.outcome}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{po.nba}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* PSOs */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12 border border-purple-100">
                            <div className="bg-purple-50 px-6 py-4 border-b border-purple-200">
                                <div className="flex items-center">
                                    <div className="bg-purple-100 p-2 rounded-full mr-4">
                                        <MdOutlineAlignVerticalBottom className="text-purple-600 text-xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Program Specific Outcomes (PSOs)</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-6">
                                    Outcomes specific to our programs that prepare students for specialized career paths
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3 border-b pb-2">Computer Science Programs (BCA/BSc IT)</h4>
                                        <ul className="space-y-3">
                                            {[
                                                "PSO1: Apply computing knowledge to solve real-world problems",
                                                "PSO2: Design and implement software solutions using modern tools",
                                                "PSO3: Demonstrate proficiency in emerging technologies",
                                                "PSO4: Adhere to professional ethics in computing practice"
                                            ].map((pso, index) => (
                                                <li key={index} className="flex items-start text-gray-600">
                                                    <span className="text-purple-500 mr-2 mt-1">•</span>
                                                    <span>{pso}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3 border-b pb-2">Business Programs (BBA)</h4>
                                        <ul className="space-y-3">
                                            {[
                                                "PSO1: Apply business concepts to organizational challenges",
                                                "PSO2: Analyze market trends using analytical tools",
                                                "PSO3: Demonstrate leadership in business decision making",
                                                "PSO4: Develop entrepreneurial solutions for economic growth"
                                            ].map((pso, index) => (
                                                <li key={index} className="flex items-start text-gray-600">
                                                    <span className="text-purple-500 mr-2 mt-1">•</span>
                                                    <span>{pso}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* COs and Mapping */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100">
                                <div className="bg-green-50 px-6 py-4 border-b border-green-200">
                                    <div className="flex items-center">
                                        <div className="bg-green-100 p-2 rounded-full mr-4">
                                            <FaBookOpen className="text-green-600 text-xl" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Course Outcomes (COs)</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">
                                        Specific measurable outcomes students should achieve in each course
                                    </p>
                                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                        <h4 className="font-semibold text-gray-800 mb-2">Example: Data Structures Course</h4>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">CO1:</span>
                                                <span>Understand and implement various linear data structures</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">CO2:</span>
                                                <span>Analyze time and space complexities of algorithms</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">CO3:</span>
                                                <span>Apply sorting and searching algorithms to solve problems</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-800 mb-2">Example: Principles of Management</h4>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">CO1:</span>
                                                <span>Explain fundamental management theories and principles</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">CO2:</span>
                                                <span>Apply planning and organizing techniques</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">CO3:</span>
                                                <span>Demonstrate leadership and decision-making skills</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-orange-100">
                                <div className="bg-orange-50 px-6 py-4 border-b border-orange-200">
                                    <div className="flex items-center">
                                        <div className="bg-orange-100 p-2 rounded-full mr-4">
                                            <MdOutlineAssessment className="text-orange-600 text-xl" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">CO-PO Mapping</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">
                                        Matrix showing how each Course Outcome contributes to Program Outcomes
                                    </p>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-gray-50">
                                            <thead>
                                                <tr>
                                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">COs → POs ↓</th>
                                                    <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">CO1</th>
                                                    <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">CO2</th>
                                                    <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">CO3</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                {[
                                                    { po: "PO1", co1: "3", co2: "3", co3: "2" },
                                                    { po: "PO2", co1: "2", co2: "3", co3: "3" },
                                                    { po: "PO3", co1: "1", co2: "2", co3: "3" },
                                                    { po: "PO4", co1: "1", co2: "1", co3: "2" }
                                                ].map((row, index) => (
                                                    <tr key={index}>
                                                        <td className="px-4 py-2 text-xs font-medium text-gray-600 border-b">{row.po}</td>
                                                        <td className="px-4 py-2 text-center text-sm text-gray-600 border-b">{row.co1}</td>
                                                        <td className="px-4 py-2 text-center text-sm text-gray-600 border-b">{row.co2}</td>
                                                        <td className="px-4 py-2 text-center text-sm text-gray-600 border-b">{row.co3}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-4 text-sm text-gray-500">
                                        <p>Scale: 1 (Low), 2 (Medium), 3 (High Contribution)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Assessment & Bloom's Taxonomy */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-red-100">
                                <div className="bg-red-50 px-6 py-4 border-b border-red-200">
                                    <div className="flex items-center">
                                        <div className="bg-red-100 p-2 rounded-full mr-4">
                                            <MdOutlineAssessment className="text-red-600 text-xl" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Assessment Methods</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">
                                        How we measure student achievement of Course Outcomes
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            "Direct Assessment: Exams, quizzes, projects, presentations",
                                            "Indirect Assessment: Surveys, interviews, self-evaluations",
                                            "Continuous Internal Evaluation (CIE): 40% weightage",
                                            "Semester End Examination (SEE): 60% weightage",
                                            "Rubric-based evaluation for practical components"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start text-gray-600">
                                                <span className="text-red-500 mr-2 mt-1">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-teal-100">
                                <div className="bg-teal-50 px-6 py-4 border-b border-teal-200">
                                    <div className="flex items-center">
                                        <div className="bg-teal-100 p-2 rounded-full mr-4">
                                            <FaBookOpen className="text-teal-600 text-xl" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Bloom's Taxonomy Mapping</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">
                                        Classification of learning outcomes by cognitive complexity levels
                                    </p>
                                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                                        {[
                                            { level: "Remember", color: "bg-blue-100 text-blue-800" },
                                            { level: "Understand", color: "bg-green-100 text-green-800" },
                                            { level: "Apply", color: "bg-yellow-100 text-yellow-800" },
                                            { level: "Analyze", color: "bg-orange-100 text-orange-800" },
                                            { level: "Evaluate", color: "bg-red-100 text-red-800" },
                                            { level: "Create", color: "bg-purple-100 text-purple-800" }
                                        ].map((item, index) => (
                                            <div key={index} className={`p-2 rounded ${item.color}`}>
                                                {item.level}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="font-semibold text-gray-800 mb-2">Example Mapping:</h4>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <span className="font-medium mr-2">CO1:</span>
                                                <span>Remember, Understand (Basic concepts)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="font-medium mr-2">CO2:</span>
                                                <span>Apply, Analyze (Problem solving)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="font-medium mr-2">CO3:</span>
                                                <span>Evaluate, Create (Advanced applications)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Attainment Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center mb-8">
                            <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                <FaChartBar className="text-indigo-600 text-2xl" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800">Outcome Attainment Process</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {[
                                {
                                    step: "1",
                                    title: "Define Metrics",
                                    description: "Establish measurable indicators for each outcome"
                                },
                                {
                                    step: "2",
                                    title: "Collect Data",
                                    description: "Gather direct and indirect assessment results"
                                },
                                {
                                    step: "3",
                                    title: "Analyze Results",
                                    description: "Calculate attainment levels for each CO/PO"
                                },
                                {
                                    step: "4",
                                    title: "Set Thresholds",
                                    description: "Define minimum acceptable attainment levels"
                                },
                                {
                                    step: "5",
                                    title: "Identify Gaps",
                                    description: "Find areas needing improvement"
                                },
                                {
                                    step: "6",
                                    title: "Implement Changes",
                                    description: "Modify curriculum and teaching methods"
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sample Attainment Calculation</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">CO</th>
                                            <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Target (%)</th>
                                            <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Achieved (%)</th>
                                            <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Attainment Level</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { co: "CO1", target: "70", achieved: "75", level: "Achieved" },
                                            { co: "CO2", target: "70", achieved: "68", level: "Partially Achieved" },
                                            { co: "CO3", target: "70", achieved: "82", level: "Exceeded" }
                                        ].map((row, index) => (
                                            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                                <td className="px-4 py-2 text-sm font-medium text-gray-600 border-b">{row.co}</td>
                                                <td className="px-4 py-2 text-center text-sm text-gray-600 border-b">{row.target}</td>
                                                <td className="px-4 py-2 text-center text-sm text-gray-600 border-b">{row.achieved}</td>
                                                <td className="px-4 py-2 text-center text-sm font-medium border-b">
                                                    <span className={`px-2 py-1 rounded-full text-xs ${row.level === "Achieved" ? "bg-green-100 text-green-800" :
                                                            row.level === "Partially Achieved" ? "bg-yellow-100 text-yellow-800" :
                                                                "bg-blue-100 text-blue-800"
                                                        }`}>
                                                        {row.level}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Experience Outcome-Based Education</h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                        Join CATALYST College and benefit from our systematic approach to measurable learning outcomes
                    </p>
                    <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all">
                        Explore Our Programs
                    </button>
                </div>
            </section>
        </div>
    );
};

export default OBEPage;