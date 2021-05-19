import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { Device } from "@capacitor/device";
import { Network } from "@capacitor/network";
import { useEffect, useState } from "react";

const Info = () => {
	const [info, setInfo] = useState<any>();
	const [networkStatus, setNetworkStatus] = useState<any>();

	useEffect(() => {
		const getDeviceInfo = async () => {
			const info = await Device.getInfo();
			console.log(info);
			setInfo(info);
		};

		const logCurrentNetworkStatus = async () => {
			const status = await Network.getStatus();
			console.log(status);
			setNetworkStatus(status);
		};

		getDeviceInfo();
		logCurrentNetworkStatus();
	}, []);
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Device Info</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Device Info</IonTitle>
					</IonToolbar>
				</IonHeader>
				{info && (
					<div className="p-4">
						<p className="py-2">
							<span className="p-2 bg-gray-600 rounded-md text-white mr-2">
								Network Status
							</span>
							{networkStatus.connected
								? networkStatus.connectionType
								: "No connection"}
						</p>
						<p className="py-2">
							<span className="p-2 bg-gray-600 rounded-md text-white mr-2">
								Manufacturer
							</span>
							{info.manufacturer}
						</p>
						<p className="py-2">
							<span className="p-2 bg-gray-600 rounded-md text-white mr-2">
								Model
							</span>
							{info.model}
						</p>
						<p className="py-2">
							<span className="p-2 bg-gray-600 rounded-md text-white mr-2">
								Operating System
							</span>
							{info.operatingSystem}
						</p>
						<p className="py-2">
							<span className="p-2 bg-gray-600 rounded-md text-white mr-2">
								O.S Version
							</span>
							{info.osVersion}
						</p>
						<p className="py-2">
							<span className="p-2 bg-gray-600 rounded-md text-white mr-2">
								Platorm
							</span>
							{info.platform}
						</p>
						<p className="py-2">
							<span className="p-2 bg-gray-600 rounded-md text-white mr-2">
								Web version
							</span>
							{info.webViewVersion}
						</p>
						<p className="py-2">
							<span className="p-2 bg-gray-600 rounded-md text-white mr-2">
								Virtual?
							</span>
							{info.isVirtual ? "Yes" : "No"}
						</p>
					</div>
				)}
			</IonContent>
		</IonPage>
	);
};

export default Info;
