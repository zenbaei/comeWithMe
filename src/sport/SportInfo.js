import { IconSource } from "../Constants";

export class SportInfo {

    constructor(name, iconSource) {
        this.name = name;
        this.iconSource = iconSource;
        this.isToggled = false;
    }

}

export const Sports = {
    TABLE_TENNIS: 'table-tennis',
    FOOTBALL: 'ios-football',
    TENNIS: 'ios-tennisball',
    VOLLEY: 'volleyball-ball',
    KARATE: 'karate',
    BOWLING: 'bowling-ball',
    ROWING: 'rowing',
    HOCKEY: 'hockey-sticks',
    SWIMMING: 'swimmer',
    WEIGHTS: 'ios-fitness',
    CARDIO: 'google-fit',
    RUNNING: 'run'
}

export const SportsCollection = new Map()
    .set(Sports.TABLE_TENNIS, new SportInfo(Sports.TABLE_TENNIS, IconSource.FONT_AWESOME_5))
    .set(Sports.FOOTBALL, new SportInfo(Sports.FOOTBALL, IconSource.ION_ICONS))
    .set(Sports.TENNIS, new SportInfo(Sports.TENNIS, IconSource.ION_ICONS))
    .set(Sports.VOLLEY, new SportInfo(Sports.VOLLEY, IconSource.FONT_AWESOME_5))
    .set(Sports.KARATE, new SportInfo(Sports.KARATE, IconSource.COMMUNITY_ICONS))
    .set(Sports.BOWLING, new SportInfo(Sports.BOWLING, IconSource.FONT_AWESOME_5))
    .set(Sports.ROWING, new SportInfo(Sports.ROWING, IconSource.COMMUNITY_ICONS))
    .set(Sports.HOCKEY, new SportInfo(Sports.HOCKEY, IconSource.COMMUNITY_ICONS))
    .set(Sports.SWIMMING, new SportInfo(Sports.SWIMMING, IconSource.FONT_AWESOME_5))
    .set(Sports.WEIGHTS, new SportInfo(Sports.WEIGHTS, IconSource.ION_ICONS))
    .set(Sports.CARDIO, new SportInfo(Sports.CARDIO, IconSource.COMMUNITY_ICONS))
    .set(Sports.RUNNING, new SportInfo(Sports.RUNNING, IconSource.COMMUNITY_ICONS))

    