import { combineReducers } from "redux";

import artist from "./artist";
import song from "./song";
import auth from "./auth";
import payment from "./payment";

export default combineReducers({ song, auth, payment, artist });
