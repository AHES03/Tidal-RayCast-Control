// import { buildScriptEnsuringTidalIsRunning, runAppleScriptSilently } from "./utils";
// // import { showNextTrackNotification } from "./trackNotification";
//
// export default async () => {
//   const script = buildScriptEnsuringTidalIsRunning(`tell application "System Events"
//   tell process "TIDAL"
//   click menu item "Next" of menu "Playback" of menu bar 1
//   end tell
// end tell`);
//   await runAppleScriptSilently(script);
//   // await showNextTrackNotification();
// };