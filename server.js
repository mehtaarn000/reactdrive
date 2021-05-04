import express from "express"
import cookieParser from "cookie-parser"
import register from '@react-ssr/express/register.js'
import fileUpload from "express-fileupload"
import bodyParser from "body-parser"

import loginRouter from "./routes/login.js"
import registerRouter from "./routes/register.js"
import driveRouter from "./routes/drive.js"

const app = express();
app.use(cookieParser());
app.use(bodyParser());
app.use(fileUpload());
app.use("/", loginRouter);
app.use("/", registerRouter);
app.use("/", driveRouter);

(async () => {
  // register `.jsx` or `.tsx` as a view template engine
  await register(app);
 app.post("/register", function(req, res) {
     res.send(req.body)
 })
  app.listen(3001);
})();