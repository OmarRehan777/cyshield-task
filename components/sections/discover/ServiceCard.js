export const ServiceCard = ({ icon, title, description }) => (
	<div className="bg-white p-6 rounded-xl shadow-lg border border-light-grey-DEFAULT/50 flex flex-col items-start text-left">
		<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 border border-primary/20">
			<span className="text-primary text-5xl font-bold">{icon}</span>
		</div>
		<h3 className="text-xl font-bold text-black mb-2">{title}</h3>
		<p className="text-sm text-grey-DEFAULT">{description}</p>
	</div>
);
