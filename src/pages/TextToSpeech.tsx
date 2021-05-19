import {
	IonButtons,
	IonContent,
	IonFab,
	IonFabButton,
	IonHeader,
	IonIcon,
	IonItem,
	IonMenuButton,
	IonPage,
	IonTextarea,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { TextToSpeech } from "@capacitor-community/text-to-speech";
import { useState } from "react";
import { playOutline } from "ionicons/icons";

const Tts = () => {
	const [text, setText] = useState<string>("");

	const speak = async () => {
		await TextToSpeech.speak({
			text: text,
			lang: "en_US",
			rate: 1.0,
			pitch: 1.0,
			volume: 1.0,
			category: "ambient",
		});
		setText("");
	};
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Text to Speech</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Image</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonItem>
					<IonTextarea
						placeholder="Text something and press play"
						rows={10}
						value={text}
						onIonChange={(e) => setText(e.detail.value!)}
					></IonTextarea>
				</IonItem>
				<IonFab
					vertical="bottom"
					horizontal="end"
					slot="fixed"
					className="bg-transparent"
				>
					<IonFabButton>
						<IonIcon
							onClick={speak}
							icon={playOutline}
							className="h-10 w-10"
						/>
					</IonFabButton>
				</IonFab>
			</IonContent>
		</IonPage>
	);
};

export default Tts;
