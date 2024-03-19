export const ErrorMessage = ({ message }: { message?: string }) => {
	return (
		<div className=" flex items-center  h-5 w-full">
			{message && (
				<span className="  text-center text-sm text-rose-500">{message}</span>
			)}
		</div>
	);
};
