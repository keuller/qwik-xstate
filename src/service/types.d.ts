export interface WizardState {
    option: string,
    value: number,

    name: string,
    email: string,
    
    country: string,
    city: string
}

export type WizardEvent = {
    type: 'PREV'
} | { 
    type: 'NEXT', 
    option?: string,
    value?: number
} | {
    type: 'NEXT',
    country?: string,
    city?: string
} | {
    type: 'SEND',
    name: string,
    email: string
}