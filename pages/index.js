import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Tabs } from "../src/components/Tabs";
import site from "../config";
import { getSortedImages } from "../src/lib/loadImages";

export default function Index({ noms: images }) {
	console.log({ noms: images });
	return (
		<Container maxWidth="lg">
			<Box sx={{ my: 4 }}>
				<Tabs mon={site.mon} images={images} />
			</Box>
		</Container>
	);
}

export const getStaticProps = async () => {
	const allNoms = getSortedImages();
	return {
		props: {
			images: allNoms,
		},
	};
};
