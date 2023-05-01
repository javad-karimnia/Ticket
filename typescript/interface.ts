type Data ={
    id: number,
    headTitle: string,
    content: string,      
}

export interface IData {
    id: string;
    coverPic: string;
    pic: string;
    picSuport: Array<object>;
    title: string;
    price: number;
    introduction: string;
    details: Array<Data>;
    Headline: Array<object>;
    info: object;
};