export class SportIcon {

    constructor(name, source) {
        this.name = name;
        this.source = source;
        this.isToggled = false;
    }

}

export const Source = {
    FONT_AWESOME_5: 1,
    ION_ICONS: 2,
    COMMUNITY_ICONS: 3
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

export const SportsMap = new Map()
    .set(Sports.TABLE_TENNIS, new SportIcon(Sports.TABLE_TENNIS, Source.FONT_AWESOME_5))
    .set(Sports.FOOTBALL, new SportIcon(Sports.FOOTBALL, Source.ION_ICONS))
    .set(Sports.TENNIS, new SportIcon(Sports.TENNIS, Source.ION_ICONS))
    .set(Sports.VOLLEY, new SportIcon(Sports.VOLLEY, Source.FONT_AWESOME_5))
    .set(Sports.KARATE, new SportIcon(Sports.KARATE, Source.COMMUNITY_ICONS))
    .set(Sports.BOWLING, new SportIcon(Sports.BOWLING, Source.FONT_AWESOME_5))
    .set(Sports.ROWING, new SportIcon(Sports.ROWING, Source.COMMUNITY_ICONS))
    .set(Sports.HOCKEY, new SportIcon(Sports.HOCKEY, Source.COMMUNITY_ICONS))
    .set(Sports.SWIMMING, new SportIcon(Sports.SWIMMING, Source.FONT_AWESOME_5))
    .set(Sports.WEIGHTS, new SportIcon(Sports.WEIGHTS, Source.ION_ICONS))
    .set(Sports.CARDIO, new SportIcon(Sports.CARDIO, Source.COMMUNITY_ICONS))
    .set(Sports.RUNNING, new SportIcon(Sports.RUNNING, Source.COMMUNITY_ICONS))

    