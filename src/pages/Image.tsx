import {
	IonButtons,
	IonContent,
	IonFab,
	IonFabButton,
	IonHeader,
	IonIcon,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { Camera, CameraResultType } from "@capacitor/camera";
import { cameraReverseOutline } from "ionicons/icons";
import { useState } from "react";

const Image = () => {
	const [src, setSrc] = useState<any>("/assets/noimage.png");
	const takePicture = async () => {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			resultType: CameraResultType.Uri,
		});

		// image.webPath will contain a path that can be set as an image src.
		// You can access the original file using image.path, which can be
		// passed to the Filesystem API to read the raw data of the image,
		// if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
		const imageUrl = image.webPath;
		setSrc(imageUrl);
		//imageElement.src = imageUrl;
	};
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Image</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Image</IonTitle>
					</IonToolbar>
				</IonHeader>
				<img src={src} alt="camera shoot" />
				<IonFab
					vertical="bottom"
					horizontal="end"
					slot="fixed"
					className="bg-transparent"
				>
					<IonFabButton>
						<IonIcon
							onClick={takePicture}
							icon={cameraReverseOutline}
							className="h-10 w-10"
						/>
					</IonFabButton>
				</IonFab>
			</IonContent>
		</IonPage>
	);
};

export default Image;
