import { createMiddleware } from "@mswjs/http-middleware";
import cors from 'cors'
import express from 'express'

import { handlers } from "@/shared/mock/api/handler";


const app = express();
const port = 9090;

app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200, credentials: true }))
app.use(express.json())
app.use(createMiddleware(...handlers));
app.listen(port, () => console.info(`Mock server is running on port: ${port}`))
