import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./Categories/category.saga";
import { userSaga } from "./User/user.saga";

export function* rootSaga() {
    yield all([call(categoriesSaga), call(userSaga)])
} 