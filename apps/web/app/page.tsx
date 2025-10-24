"use client";

import { Button } from "@workspace/ui/components/button";
import { dayjs } from "@workspace/utils";
import { ArrowLeft, ArrowRight, Heart, Menu, Rocket } from "lucide-react";

export default function Page() {
	const now = dayjs().format("DD/MM/YYYY HH:mm:ss");

	// Fonction async pour tester le loading automatique
	const handleAsyncClick = async () => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		alert("Action terminée !");
	};

	// Fonction sync pour tester le comportement normal
	const handleSyncClick = () => {
		alert("Action synchrone !");
	};

	return (
		<div className="flex items-center justify-center min-h-svh">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="text-2xl font-bold">Buttons tests</h1>
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

					{/* Tests de la fonctionnalité de loading */}
					<div className="flex flex-col gap-2 mt-4">
						<h3 className="text-lg font-semibold">Tests de Loading</h3>

						{/* Bouton avec loading automatique (Promise) */}
						<Button icon={Rocket} onClick={handleAsyncClick} size="small">
							Loading automatique (2s)
						</Button>

						{/* Bouton avec loading manuel */}
						<Button icon={Heart} onClick={handleSyncClick} size="small">
							Pas de loading
						</Button>

						{/* Bouton avec icône qui sera remplacée par le loader */}
						<Button icon={Menu} onClick={handleAsyncClick} size="small">
							Icône remplacée par loader
						</Button>

						{/* Bouton avec seulement une icône et loading */}
						<Button icon={Heart} onClick={handleAsyncClick} size="small" />
						<Button
							icon={ArrowLeft}
							iconRight={ArrowRight}
							onClick={handleAsyncClick}
							size="small"
							center={true}
						>
							Test
						</Button>
					</div>

					<div className="text-semibase">xxx</div>
				</div>
			</div>
		</div>
	);
}
