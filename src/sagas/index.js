import {takeLatest, put, call, fork} from "redux-saga/effects";
import jokes from './jokes';

export default function* root() {
    yield [
        jokes,
    ];
}