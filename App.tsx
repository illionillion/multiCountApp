import CountApp from "./screens/CountApp";
import * as appJson from './app.json';
export const version = appJson.expo.version;

export default function App() {
  return (
    <CountApp />
  );
}