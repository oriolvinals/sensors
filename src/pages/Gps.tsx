import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { Geolocation } from "@capacitor/geolocation";
import { useEffect, useState } from "react";

const Gps = () => {
	const [gpsInfo, setGpsInfo] = useState<any>();

	useEffect(() => {
		const getDeviceGps = async () => {
			const location = await Geolocation.getCurrentPosition();
			console.log(location);
			setGpsInfo(location);
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
					<IonTitle>GPS Info</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">GPS Info</IonTitle>
					</IonToolbar>
				</IonHeader>
				{gpsInfo && (
					<div className="p-4">
						<p>Latitude: {gpsInfo.coords.latitude}</p>
						<p>Longitude: {gpsInfo.coords.longitude}</p>
					</div>
				)}
			</IonContent>
		</IonPage>
	);
};

export default Gps;
