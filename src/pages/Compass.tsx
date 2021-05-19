import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { Plugins } from "@capacitor/core";
import { useEffect, useState } from "react";
const { Geolocation } = Plugins;

const Compass = () => {
	const [heading, setHeading] = useState<any>();

	useEffect(() => {
		const getDeviceGps = async () => {
			const location = await Geolocation.getCurrentPosition();
			setHeading(location.coords.heading);
		};

		getDeviceGps();
	}, []);
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
				{!heading && (
					<div className="p-4 flex justify-center items-center w-full h-full absolute top-0">
						<img src="/assets/compass.png" alt="compass" />
					</div>
				)}
				{heading && (
					<div className="p-4 text-center">
						Can't access to heading value
					</div>
				)}
			</IonContent>
		</IonPage>
	);
};

export default Compass;
