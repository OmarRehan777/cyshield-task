// Sub-Component: Stat Item (لأرقام الـ 30%)
export const StatItem = ({ value, label }) => (
	// نستخدم border-white للخط الفاصل
	<div className="flex flex-col text-center md:text-left border-l-2 border-white last:border-r-0 px-4 md:px-10 gap-4">
		<span className="text-5xl md:text-6xl font-extrabold text-white mb-1">
			{value}
		</span>
		<span className="text-base text-white">{label}</span>
	</div>
);
