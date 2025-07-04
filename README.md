# AngularMatchMedia

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Mihail04/angularMatchMedia)


provide MatchMediaService in module or component and inject it.
Service has only one public method - getViewType whitch return Observable<string>(viewport type)
DEFAULT_MEDIA_QUERY - InjectionToken. Can be overriden.

### EXAMPLE

```
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  viewProviders: [MatchMediaService]
})
export class FormComponent implements OnInit {

  constructor(private matchMediaService: MatchMediaService){}

  ngOnInit(){
    this.matchMediaService.getViewType().subscribe(console.log)
  }
}

```

### DEFAULT_MEDIA_QUERY - default value 
```
[
    {
        name: ViewportType.MOBILE,
        query: 'only screen and (min-width: 320px) and (max-width: 550px)'
    },
    {
        name: ViewportType.TABLET,
        query: 'only screen and (min-width:551px) and (max-width: 1024px)'
    },
    {
        name: ViewportType.SMALL_DESKTOP_SCREEN,
        query: 'only screen and (min-width: 1025px) and (max-width: 1440px)'
    },
    {
        name: ViewportType.DESKTOP_SCREEN,
        query: 'only screen and (min-width: 1440px) and (max-width: 1920px)'
    },
    {
        name: ViewportType.LARGE_DESKTOP_SCREEN,
        query: 'only screen and (min-width: 1921px)'
    }
]
```
### ViewportType
```
export enum ViewportType {
    MOBILE = 'MOBILE',
    TABLET = 'TABLET',
    SMALL_DESKTOP_SCREEN = 'SMALL_DESKTOP_SCREEN',
    DESKTOP_SCREEN = 'DESKTOP_SCREEN',
    LARGE_DESKTOP_SCREEN = 'LARGE_DESKTOP_SCREEN'
}
```
