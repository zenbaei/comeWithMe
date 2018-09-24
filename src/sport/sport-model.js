import { IconSource } from "../constants";

export class SportModel {

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
    .set(Sports.TABLE_TENNIS, new SportModel(Sports.TABLE_TENNIS, IconSource.FONT_AWESOME_5))
    .set(Sports.FOOTBALL, new SportModel(Sports.FOOTBALL, IconSource.ION_ICONS))
    .set(Sports.TENNIS, new SportModel(Sports.TENNIS, IconSource.ION_ICONS))
    .set(Sports.VOLLEY, new SportModel(Sports.VOLLEY, IconSource.FONT_AWESOME_5))
    .set(Sports.KARATE, new SportModel(Sports.KARATE, IconSource.COMMUNITY_ICONS))
    .set(Sports.BOWLING, new SportModel(Sports.BOWLING, IconSource.FONT_AWESOME_5))
    .set(Sports.ROWING, new SportModel(Sports.ROWING, IconSource.COMMUNITY_ICONS))
    .set(Sports.HOCKEY, new SportModel(Sports.HOCKEY, IconSource.COMMUNITY_ICONS))
    .set(Sports.SWIMMING, new SportModel(Sports.SWIMMING, IconSource.FONT_AWESOME_5))
    .set(Sports.WEIGHTS, new SportModel(Sports.WEIGHTS, IconSource.ION_ICONS))
    .set(Sports.CARDIO, new SportModel(Sports.CARDIO, IconSource.COMMUNITY_ICONS))
    .set(Sports.RUNNING, new SportModel(Sports.RUNNING, IconSource.COMMUNITY_ICONS))

    