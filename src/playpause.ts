import { buildScriptEnsuringTidalIsRunning, runAppleScriptSilently } from "./utils";
// import { showNextTrackNotification } from "./trackNotification";

export default async () => {
  const script = buildScriptEnsuringTidalIsRunning(`tell application "System Events"
  tell process "TIDAL"
  click menu item 0 of menu "Playback" of menu bar 1
  end tell
end tell`);
  await runAppleScriptSilently(script);
  // await showNextTrackNotification();
};