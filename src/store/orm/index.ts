import {createReducer, ORM} from "redux-orm";
import * as models from "./models/index";

const orm = new ORM({stateSelector: (state) => state.orm});

// useful if importing models as a file
const spreadableModels = Object.values(models);
orm.register(...spreadableModels);

const reducer = createReducer(orm);

export {orm, reducer};
export default orm;