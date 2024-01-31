import { DependencyContainer }      from "tsyringe";
import { IPostDBLoadMod }           from "@spt-aki/models/external/IPostDBLoadMod";
import { ILogger }                  from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer }           from "@spt-aki/servers/DatabaseServer";
import { VFS }                      from "@spt-aki/utils/VFS";
import * as path                    from "path";

import * as modConfig               from "../config/config.json"

const modName = "BunBunsAmmoThing";

class BunBunsAmmoThing implements IPostDBLoadMod
{
    mod:        string;
    logger:     ILogger

    constructor() {
        this.mod = "zzzBunBunsAmmoThing";
    }

    /**
    * @param container
    */
    public postDBLoad(container: DependencyContainer)
    {
        const logger =      container.resolve<ILogger>("WinstonLogger");
        const config =      modConfig
        const database =    container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const items =       database.templates.items;
        const vfs =         container.resolve<VFS>("VFS");
        const Shotgun =     JSON.parse(vfs.readFile(path.resolve(__dirname, "../config/AmmoList/Shotgun.json")));
        const Flares =      JSON.parse(vfs.readFile(path.resolve(__dirname, "../config/AmmoList/UBGL.json")));
        const Sniper =      JSON.parse(vfs.readFile(path.resolve(__dirname, "../config/AmmoList/Sniper.json")));
        const SMG =         JSON.parse(vfs.readFile(path.resolve(__dirname, "../config/AmmoList/SMG.json")));
        const Rifle =       JSON.parse(vfs.readFile(path.resolve(__dirname, "../config/AmmoList/Rifle.json")));

        logger.log ("Unfucking your ammo stacks LOL", "magenta")

        for (const ID of Shotgun)
        {
            items[ID]._props.StackMaxSize = config.ShotgunStack
        }

        for (const ID of Flares)
        {
            items[ID]._props.StackMaxSize = config.FlaresAndUBGL
        }

        for (const ID of Sniper)
        {
            items[ID]._props.StackMaxSize = config.SniperStack
        }

        for (const ID of SMG)
        {
            items[ID]._props.StackMaxSize = config.SMGStack
        }

        for (const ID of Rifle)
        {
            items[ID]._props.StackMaxSize = config.RifleStack
        }
    }
}

module.exports = { mod: new BunBunsAmmoThing() };