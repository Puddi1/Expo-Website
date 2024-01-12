import PocketBase from "pocketbase";

export var db = new PocketBase(process.env.DB_URL);