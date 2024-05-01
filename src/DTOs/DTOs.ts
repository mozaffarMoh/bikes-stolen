export interface Bike {
    date_stolen: number;
    thumb: string;
    title: string;
    serial: string;
    frame_colors: Array<string>;
    stolen_location: string;
    description: string;
}

export interface ParamsObjTypes {
    page: number;
    per_page: number;
    title: string;
}


export interface CustomHookUseGet {
    data: Array<Bike>;
    loading: boolean;
    getDataFiltered: () => void;
    success: boolean;
    errorMessage: string;
}