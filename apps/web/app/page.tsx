import { Button } from "@workspace/ui/components/button";
import { dayjs } from "@workspace/utils";

export default function Page() {
	const now = dayjs().format("DD/MM/YYYY HH:mm:ss");

	return (
		<div className="flex items-center justify-center min-h-svh">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="text-2xl font-bold">Ceci est un test pour Alexandre</h1>
				<p className="text-sm text-gray-600">Date actuelle : {now}</p>
				<Button size="sm">Button</Button>
			</div>
		</div>
	);
}
