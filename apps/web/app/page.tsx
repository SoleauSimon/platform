import { Button } from "@workspace/ui/components/button";
import { dayjs } from "@workspace/utils";
import { ArrowLeft, ArrowRight, Heart, Menu, Rocket } from "lucide-react";

export default function Page() {
	const now = dayjs().format("DD/MM/YYYY HH:mm:ss");

	return (
		<div className="flex items-center justify-center min-h-svh">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="text-2xl font-bold">Ceci est un test pour Alexandre</h1>
				<p className="text-sm text-gray-600">Date actuelle : {now}</p>

				{/* Test des différents cas d'usage des icônes */}
				<div className="flex flex-col gap-2">
					{/* Bouton avec icône à gauche */}
					<Button icon={Rocket} size="sm">
						Lancer
					</Button>

					{/* Bouton avec icône à droite */}
					<Button iconRight={ArrowRight} size="sm">
						Suivant
					</Button>

					{/* Bouton avec icônes des deux côtés */}
					<Button icon={ArrowLeft} iconRight={ArrowRight} size="sm">
						Navigation
					</Button>

					{/* Bouton avec seulement une icône */}
					<Button icon={Heart} size="icon" />

					{/* Bouton avec popover et icône */}
					<Button
						icon={Menu}
						popoverContent={<div>Menu déroulant</div>}
						popoverProps={{ side: "bottom" }}
						size="sm"
					>
						Menu
					</Button>
					<Button>Test</Button>
				</div>
			</div>
		</div>
	);
}
