export interface Device {
    device_id: number,
    device_name: string,
    device_status: 'Offline' | 'Available',
    device_temperature: number,
    device_usage: Details[],
    device_type: 'mobile' | 'tablet' | 'computer'
}


export interface Details {
    year: string,
    europe: number,
    namerica: number,
    asia: number,
    lamerica: number,
    meast: number,
    africa: number
}