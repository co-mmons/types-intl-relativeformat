export = IntlRelativeFormat;
export as namespace IntlRelativeFormat;

interface IntlRelativeFormatOptions {
    style?: string;
    unit?: string;
}

declare class IntlRelativeFormat {
    constructor(locales: string | string[], options?: IntlRelativeFormatOptions);
    resolvedOptions(): { locale: string };
    format(arg: any, options?: IntlRelativeFormatOptions): string;
}
