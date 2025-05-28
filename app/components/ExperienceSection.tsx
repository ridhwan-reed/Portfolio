const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Software Developer Intern',
			company: 'Cita Marketplace',
			period: 'Jan 2025 - May 2025',
			highlights: 'Built new booking and vendor dashboard pages with React(Next.js), JavaScript, and Tailwind, cutting average page-load time ≈ 40 % while supporting 20K+ monthly diners.',
		},
		{
			role: 'MyStudyBuddy',
			company: 'Project',
			highlights: 'Built a platform that parses uploaded timetable/exam PDF files into an interactive calendar, provides real-time group chat, and lets students scan handwritten notes into searchable text.',
		},
		{
			role: 'SmartBudget',
			company: 'Project',
			highlights: ' secure finance‑tracker web app that syncs directly with your bank accounts, auto‑categorizes every transaction, visualizes spending trends, and sends real‑time budget alerts—so you always know where your money’s going and what you can save.',
		},
		{
			role: 'PomoWork',
			company: 'Project',
			highlights: ' productivity web app that pairs a customizable Pomodoro timer with an integrated music player, letting you structure work‑and‑break cycles while streaming curated, soothing playlists to maintain focus and reduce stress.',
		},
		
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Experience and Projects</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.company} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.role}</h4>
										<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.company}</p>
									<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.highlights}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);

};

export default ExperienceSection;

