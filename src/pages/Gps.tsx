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
import { Map, Marker, TileLayer, Popup } from "react-leaflet";

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
					<>
						<div className="p-4 w-full bg-black z-50">
							<p>Latitude: {gpsInfo.coords.latitude}</p>
							<p>Longitude: {gpsInfo.coords.longitude}</p>
						</div>
						<div>
							<Map
								className="z-30"
								center={{
									lat: gpsInfo.coords.latitude,
									lng: gpsInfo.coords.longitude,
								}}
								zoom={15}
								scrollWheelZoom={false}
							>
								<TileLayer
									attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
								<Marker
									position={{
										lat: gpsInfo.coords.latitude,
										lng: gpsInfo.coords.longitude,
									}}
								>
									<Popup>You are here!</Popup>
								</Marker>
							</Map>
						</div>
					</>
				)}
				{!gpsInfo && (
					<div className="p-4 text-center">Gps not enabled</div>
				)}
			</IonContent>
		</IonPage>
	);
};

export default Gps;
