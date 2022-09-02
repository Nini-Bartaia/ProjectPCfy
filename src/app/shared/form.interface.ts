import { NumberValueAccessor } from "@angular/forms"

export interface user{
    name:string,
    surname:String,
    teamId:number,
    positionId:number,
    email: string,
    phone:string
    
}
export interface laptopInfo{
    laptopName:string,
    laptopImage:string,
    laptopBrandId:string,
    laptopCpu:string,
    laptopCpuCores:number,
    laptopCpuThreads:number,
    laptopRam:number,
    laptopHardDriveType:string,
    laptopState:string,
    laptopPurchaseDate:string,
    laptopPrice:number

}

export interface teams{
    id:number,
    name:string
}

export interface positions{
    id:number,
    name:string,
    teamsId:number
}

export interface brands{
    id:number,
    name:string
}

export interface cpus{
    id:Number,
    name:string
}