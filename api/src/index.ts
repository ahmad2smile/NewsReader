import express from "express";
import cors from "cors";
import helmet from "helmet";

import { articleRouter } from "./Article/router";

// tslint:disable-next-line: no-var-requires
require("dotenv").config();

const app = express();

app.use(helmet());

app.use(
	cors({
		origin: "http://localhost:3000"
	})
);

app.use(express.json());

app.use("/api/articles", articleRouter);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
	// tslint:disable-next-line: no-console
	console.log(`Server is listening on port ${PORT}`);
});
