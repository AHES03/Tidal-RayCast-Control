import { buildScriptEnsuringTidalIsRunning, runAppleScriptSilently } from "./utils";

export default async () => {
  const script = buildScriptEnsuringTidalIsRunning("tell application \"System Events\"\n" +
    "  tell process \"TIDAL\"\n" +
    "    if name of menu item 0 of menu \"Playback\" of menu bar 1 is \"Pause\" then\n" +
    "      click menu item \"Pause\" of menu \"Playback\" of menu bar 1 \n" +
    "    end if\n" +
    "  end tell\n" +
    "end tell");
  await runAppleScriptSilently(script);
};