import fs from "fs";
import path from "path";

const imagesDir = path.join(process.cwd(), "public", "images");

export const getSortedImages = () => {
	const imgFiles = fs.readdirSync(imagesDir);

	const allImgs = imgFiles.map(fname => ({
		id: fname.split(".")[0],
		name: fname,
	}));

	const sorted = allImgs;

	try {
		// Sort posts by date
		sorted = allImgs.sort(({ id: a }, { id: b }) => {
			a = a.split("_")[1];
			b = b.split("_")[1];
			if (a < b) {
				return 1;
			} else if (a > b) {
				return -1;
			} else {
				return 0;
			}
		});
	} catch (error) {
		console.log("sort error", error);
	}

	return sorted;
};
