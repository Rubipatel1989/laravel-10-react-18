import { makeObservable, observable, action} from 'mobx';
import { IRootStore } from './rootStore';

 export default class AuthStore{
    BASE_URL = process.env.REACT_APP_API_URL + '/auth';
    isAuthenticated: boolean = false;
    token: string|null  = null;
    rootStore:IRootStore

    constructor(rootStore: IRootStore){
        makeObservable(this,{
            isAuthenticated: observable,
            token: observable,
            setIsAuthenticated: action,
            setToken: action
        });
        this.rootStore = rootStore
    }

    setIsAuthenticated = (value:boolean) => {
        this.isAuthenticated = value;
        if(!value) this.setToken(null)

    }
    setToken = (value:string | null) => {
        if(value){
            localStorage.setItem("_token", value);
        } else{
            localStorage.removeItem("_token");
        }
        this.token = value;
    }
    login = async (postData:any) =>{
        try{
            const response = await fetch(this.BASE_URL + '/login',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body:JSON.stringify(postData)
            })
            const data = await response.json();
            if(data.error){
                return Promise.reject(data);
            } else{
                this.setIsAuthenticated(true);
                this.setToken(data.access_token)
                return Promise.resolve(data);
            }

        } catch(error: any){
            console.log(error);
        }
    }
 }