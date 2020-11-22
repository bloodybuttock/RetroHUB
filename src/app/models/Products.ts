export interface Products {
    _userId: string;
    _id: string;
    productName: string;
    thumbnailPicture:{data:Buffer, contentType:String};
    picture:{data:Buffer, contentType:String};
    description:string;
    price:number;
    stock:string;
    briefDescription:string;
    category:string;
}