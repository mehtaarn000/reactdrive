import express from "express"
import cookieParser from "cookie-parser"
import register from '@react-ssr/express/register.js'
import fileUpload from "express-fileupload"
import bodyParser from "body-parser"
import compression from "compression"

import loginRouter from "./routes/login.js"
import registerRouter from "./routes/register.js"
import driveRouter from "./routes/drive.js"

const app = express();
await register(app);
app.use(cookieParser());
app.use(bodyParser());
app.use(fileUpload());
app.use(compression());
app.use("/", loginRouter);
app.use("/", registerRouter);
app.use("/", driveRouter);

(async () => {
    app.listen(3001);

})();