import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
  Button,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="test app" primaryAction={null} />
    </Page>
  );
}
