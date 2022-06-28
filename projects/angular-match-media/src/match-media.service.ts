import {DOCUMENT} from "@angular/common";
import {Inject, Injectable, OnDestroy} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {filter} from 'rxjs/operators';
import {MediaQueryItem} from "./model";
import {DEFAULT_MEDIA_QUERY} from "./tokens";

@Injectable()
export class MatchMediaService implements OnDestroy {

    private mediaQueryItems = this.query.map(item => this.document.defaultView?.matchMedia(item.query));

    private subject = new BehaviorSubject<string | undefined>(this.getName());

    private filterCb = (event: MediaQueryListEvent) => this.handle(event);

    constructor(@Inject(DEFAULT_MEDIA_QUERY) protected query: MediaQueryItem[],
                @Inject(DOCUMENT) protected document: Document){
        this.mediaQueryItems.forEach(item => item?.addEventListener('change', this.filterCb));
    }

    getViewType(): Observable<string>{
        return this.subject.pipe(filter(value => !!value)) as Observable<string>;
    }

    ngOnDestroy(): void {
        this.mediaQueryItems.forEach(item => item?.removeEventListener('change', this.filterCb));
    }

    private getName(): string | undefined {
        const index = this.mediaQueryItems.findIndex(item => item?.matches);
        if(index === -1) return;
        return this.query[index].name     
    }

    private handle(event: MediaQueryListEvent){
        if(!event.matches) return;
        const name = this.getName();
        if(!name) return;
        this.subject.next(name);
    }
}