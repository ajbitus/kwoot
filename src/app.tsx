import { createRoot } from "react-dom/client";
import {
  Button,
  FluentProvider,
  webLightTheme,
} from "@fluentui/react-components";

const root = createRoot(document.getElementById("root"));

root.render(
  <FluentProvider theme={webLightTheme}>
    <Button>Button</Button>
  </FluentProvider>
);
