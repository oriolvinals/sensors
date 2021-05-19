import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
	cameraOutline,
	informationOutline,
	locateOutline,
	navigateOutline,
	textOutline,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
	url: string;
	iosIcon: string;
	mdIcon: string;
	title: string;
}

const appPages: AppPage[] = [
	{
		title: "Device info",
		url: "/info",
		iosIcon: informationOutline,
		mdIcon: informationOutline,
	},
	{
		title: "GPS",
		url: "/gps",
		iosIcon: locateOutline,
		mdIcon: locateOutline,
	},
	{
		title: "Compass",
		url: "/compass",
		iosIcon: navigateOutline,
		mdIcon: navigateOutline,
	},
	{
		title: "Image",
		url: "/image",
		iosIcon: cameraOutline,
		mdIcon: cameraOutline,
	},
	{
		title: "Text to Speech",
		url: "/tts",
		iosIcon: textOutline,
		mdIcon: textOutline,
	},
];

const Menu: React.FC = () => {
	const location = useLocation();

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="inbox-list">
					<IonListHeader>Sensors</IonListHeader>
					<IonNote>Oriol Viñals</IonNote>
					{appPages.map((appPage, index) => {
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem
									className={
										location.pathname === appPage.url
											? "selected"
											: ""
									}
									routerLink={appPage.url}
									routerDirection="none"
									lines="none"
									detail={false}
								>
									<IonIcon
										slot="start"
										ios={appPage.iosIcon}
										md={appPage.mdIcon}
									/>
									<IonLabel>{appPage.title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
