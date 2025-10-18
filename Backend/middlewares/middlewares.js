import bodyParser from "body-parser";
import helmetConfig from "./middlewares/helmet";
import helmet from "helmet";
import cookieParser from "cookie-parser";

app.use(bodyParser.json()); //! convert frontend data so backend read that easily.
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser());
app.use(helmetConfig); 
app.use(helmet());   //* used for incresing security by automatically setting HTTP headers.