import AuthStore from "./authStore";

export interface IRootStore {
    authStore:AuthStore;
}

export class RootStore{
    authStore:AuthStore
    constructor(){
        
        console.log("RootStore");
        this.authStore = new AuthStore(this)
    }

    public handleError = (errorCode:number | null = null, errorMessage:string, errorData:any) =>{
        console.log()
    }
}