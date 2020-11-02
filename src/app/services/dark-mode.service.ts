import {Injectable} from '@angular/core'

@Injectable()
export class darkModeService {
    
    start() {
        if (window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.body.classList.add('dark');
        }
    }
    toggle() {
        document.body.classList.toggle('dark');
    }
    

}