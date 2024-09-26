import { buildScriptEnsuringTidalIsRunning, runAppleScriptSilently } from "./utils";

export default async () => {
  const script = buildScriptEnsuringTidalIsRunning(`tell application "System Events"
  tell process "TIDAL"
    if name of menu item 0 of menu "Playback" of menu bar 1 is "Play" then
      click menu item "Play" of menu "Playback" of menu bar 1
    end if
  end tell
end tell`);
  await runAppleScriptSilently(script);
};