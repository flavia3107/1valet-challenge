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
    north_america: number,
    asia: number,
    latino_america: number,
    middle_east: number,
    africa: number
}