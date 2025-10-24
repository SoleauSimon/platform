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
					<Button icon={Rocket} size="small">
						Lancer
					</Button>

					{/* Bouton avec icône à droite */}
					<Button iconRight={ArrowRight} size="small">
						Suivant
					</Button>

					{/* Bouton avec icônes des deux côtés */}
					<Button icon={ArrowLeft} iconRight={ArrowRight} size="small">
						Navigation
					</Button>

					{/* Boutons avec seulement des icônes - test des tailles automatiques */}
					<div className="flex gap-2 items-center">
						<Button icon={Heart} size="small" />
						<Button icon={Heart} size="default" />
						<Button icon={Heart} size="large" />
					</div>

					{/* Bouton avec popover et icône */}
					<Button
						icon={Menu}
						popoverContent={<div>Menu déroulant</div>}
						popoverProps={{ side: "bottom" }}
						size="small"
					>
						Menu
					</Button>
					<Button variant="ghostDefault" size="small">
						Test
					</Button>
					<Button variant="primary" size="small">
						Test
					</Button>
					<Button variant="destructive" size="small">
						Test
					</Button>
					<div className="text-semibase">xxx</div>
				</div>
			</div>
		</div>
	);
}
