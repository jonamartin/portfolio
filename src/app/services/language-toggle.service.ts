import {Injectable} from '@angular/core'
import texts from '../../assets/texts.json';

@Injectable()
export class languageToggleService {

    public language: string = "ES";

    changeLanguage(){
     this.language = this.language === "ES" ? "EN" : "ES";
    
    }
    getText(key: string){
        return texts[this.language][key]
    }
}
