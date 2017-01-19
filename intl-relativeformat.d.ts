export = IntlRelativeFormat;
export as namespace IntlRelativeFormat;

interface IntlRelativeFormatInstanceOptions {
    style?: string;
    unit?: string;
}

interface IntlRelativeFormatOptions {
    now?: Date
}

declare class IntlRelativeFormat {
    constructor(locales: string | string[], options?: IntlRelativeFormatInstanceOptions);
    resolvedOptions(): { locale: string };
    format(arg: any, options?: IntlRelativeFormatOptions): string;
}
