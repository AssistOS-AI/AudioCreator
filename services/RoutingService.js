export class RoutingService {
    constructor() {}
    async navigateToLocation(locationArray = [], appName) {
        const AUDIO_CREATOR = "audio-creator";

       if (locationArray.length === 0 || locationArray[0] === AUDIO_CREATOR) {
            const pageUrl = `${assistOS.space.id}/${appName}/${AUDIO_CREATOR}`;
            await assistOS.UI.changeToDynamicPage(AUDIO_CREATOR, pageUrl);
            return;
        }
         if(locationArray[locationArray.length-1]!== AUDIO_CREATOR){
         console.error(`Invalid URL: URL must end with ${AUDIO_CREATOR}`);
            return;
        }
        const webComponentName = locationArray[locationArray.length - 1];
        const pageUrl = `${assistOS.space.id}/${appName}/${locationArray.join("/")}`;
        await assistOS.UI.changeToDynamicPage(webComponentName, pageUrl);
    }
}
