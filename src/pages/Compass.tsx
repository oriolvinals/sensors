import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { Motion } from "@capacitor/motion";
import { useState } from "react";

const Compass = () => {
	const [heading, setHeading] = useState<Array<number>>([]);

	Motion.addListener("orientation", (event) => {
		setHeading([event.alpha, event.beta, event.gamma]);
	});

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Compass</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Compass</IonTitle>
					</IonToolbar>
				</IonHeader>
				{heading.length !== 0 && (
					<div className="p-4 flex justify-center items-center w-full h-full absolute top-0">
						<img
							src="/assets/compass.png"
							alt="compass"
							style={{
								transform: "rotate(" + heading[0] + "deg)",
							}}
						/>
					</div>
				)}
				{!heading && (
					<div className="p-4 text-center">
						Can't access to heading value
					</div>
				)}
			</IonContent>
		</IonPage>
	);
};

export default Compass;
