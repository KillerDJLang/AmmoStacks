export class WriteAmmoLists
{
    constructor() 
    {}

    public generateAmmoTypeData(tables, BaseClasses, vfs)
    {
        const items = Object.values(tables.templates.items);
        const rifleArray =   [];
        const shotgunArray = [];
        const smgArray =     [];
        const sniperArray =  [];
        const ubglArray =    [];

        for (const item of items)
        {
            if (item._parent === BaseClasses.AMMO && item._props.Caliber === "Caliber366TKM" 
                                                  || item._props.Caliber === "Caliber9x39"
                                                  || item._props.Caliber === "Caliber762x39" 
                                                  || item._props.Caliber === "Caliber556x45NATO"
                                                  || item._props.Caliber === "Caliber545x39"
                                                  || item._props.Caliber === "Caliber127x55"
                                                  || item._props.Caliber === "Caliber68x51"
                                                  || item._props.Caliber === "Caliber762x35")
            {
                rifleArray.push(item._id)
            }

            //
            //
            //

            if (item._parent === BaseClasses.AMMO && item._props.Caliber === "Caliber12g"
                                                  || item._props.Caliber === "Caliber20g")
            {
                shotgunArray.push(item._id)
            }

            //
            //
            //

            if (item._parent === BaseClasses.AMMO && item._props.Caliber === "Caliber1143x23ACP"
                                                  || item._props.Caliber === "Caliber46x30"
                                                  || item._props.Caliber === "Caliber57x28"
                                                  || item._props.Caliber === "Caliber762x25TT"
                                                  || item._props.Caliber === "Caliber9x18PM"
                                                  || item._props.Caliber === "Caliber9x19PARA"
                                                  || item._props.Caliber === "Caliber9x21"
                                                  || item._props.Caliber === "Caliber9x33R")
            {
                smgArray.push(item._id)
            }

            //
            //
            //

            if (item._parent === BaseClasses.AMMO && item._props.Caliber === "Caliber762x51"
                                                  || item._props.Caliber === "Caliber762x54R"
                                                  || item._props.Caliber === "Caliber86x70")
            {
                sniperArray.push(item._id)
            }

            //
            //
            //

            if (item._parent === BaseClasses.UBGL || item._props.Caliber === "Caliber26x75"
                                                  || item._props.Caliber === "Caliber30x29"
                                                  || item._props.Caliber === "Caliber40mmRU"
                                                  || item._props.Caliber === "Caliber40x46")
            {
                ubglArray.push(item._id)
            }
        }

        const rifleArrayFile =   JSON.stringify(rifleArray, null, 2);
        const shotgunArrayFile = JSON.stringify(shotgunArray, null, 2);
        const smgArrayFile =     JSON.stringify(smgArray, null, 2);
        const sniperArrayFile =  JSON.stringify(sniperArray, null, 2);
        const ubglArrayFile =    JSON.stringify(ubglArray, null, 2);
        vfs.writeFile("./user/mods/zzzBunBunsAmmoThing/config/AmmoList/Rifle.json",   rifleArrayFile);
        vfs.writeFile("./user/mods/zzzBunBunsAmmoThing/config/AmmoList/Shotgun.json", shotgunArrayFile);
        vfs.writeFile("./user/mods/zzzBunBunsAmmoThing/config/AmmoList/SMG.json",     smgArrayFile);
        vfs.writeFile("./user/mods/zzzBunBunsAmmoThing/config/AmmoList/Sniper.json",  sniperArrayFile);
        vfs.writeFile("./user/mods/zzzBunBunsAmmoThing/config/AmmoList/UBGL.json",    ubglArrayFile);
    }
}