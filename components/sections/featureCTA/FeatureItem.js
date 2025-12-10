export const FeatureItem = ({ icon, title, description }) => (
	<div className="flex items-start space-x-4">
		{/* Icon (Placeholder بسيط) */}
		<div className="flex-shrink-0 text-3xl text-accent-DEFAULT p-2 rounded-full bg-light-grey-2">
			{icon}
		</div>

		{/* Content */}
		<div>
			<h4 className="text-lg font-bold text-black-DEFAULT">{title}</h4>
			<p className="text-sm text-black-3">{description}</p>
		</div>
	</div>
);
