import { readFileSync, writeFileSync } from "node:fs";
import iDatabase from "../type/interface/database/Database.js";
import { Errors } from "../type/enum/errors/Errors.js";

export default class DatabaseConnection {
    private static readonly url: string = "./src/model/database.json";
    private static file: string;

    public static readJson(): iDatabase {
        try {
            this.file = readFileSync(this.url, "utf8");
            return JSON.parse(this.file);
        } catch(error: unknown) {
            throw new Error(Errors.ERROR_READING_DATABASE);
        }
    };

    public static saveJson(json: iDatabase): void {
        try {
            this.file = JSON.stringify(json, null, 2);
            writeFileSync(this.url, this.file, "utf-8");
        } catch(error: unknown) {
            throw new Error(Errors.ERROR_SAVING_DATA);
        }
    };

    // public static autoincrement(): string {
    //     let json: iDatabase;
    //     let lastUserId: number;
    //     let key: string | undefined;

    //     json = this.readJson();
    //     lastUserId = Object.keys(json.users).length - 1; //Get the last user's ID

    //     console.log("My last user: ", lastUserId, "\n\n");

    //     if(lastUserId > -1) {
    //         key = Object.keys(json.users)[lastUserId];
    //         console.log("\n\nMinha key: ", key, "\n\n");
    //     }
        
    //     return "";
    // };
};