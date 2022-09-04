import { NumberValueAccessor } from "@angular/forms"

export interface user{
    name:string,
    surname:String,
    teamId:number,
    positionId:number,
    email: string,
    phone:string,
    token:'6d8e33bcc7d765da654c61de1d4151af';
    
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

// export interface data{

//     name:string,
//     surname:String,
//     teamId:number,
//     positionId:number,
//     email: string,
//     phone:string,
//     //token:'6d8e33bcc7d765da654c61de1d4151af';
//     laptopName:string,
//     laptopImage:string,
//     laptopBrandId:string,
//     laptopCpu:string,
//     laptopCpuCores:number,
//     laptopCpuThreads:number,
//     laptopRam:number,
//     laptopHardDriveType:string,
//     laptopState:string,
//     laptopPurchaseDate:string,
//     laptopPrice:number
// }

export interface data{
    
        name:String,
        surname:String,
        teamId:Number,
        positionId:Number,
        email: String,
        phone:String,
        token:'6d8e33bcc7d765da654c61de1d4151af'
        
    
    laptopName:String,
    laptopImage:String,
    laptopBrandId:String,
    laptopCpu:String,
    laptopCpuCores:Number,
    laptopCpuThreads:Number,
    laptopRam:Number,
    laptopHardDriveType:String,
    laptopState:String,
    laptopPurchaseDate:String,
    laptopPrice:Number
}
    


