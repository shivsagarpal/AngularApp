import { Component } from '@angular/core';

@Component({
    selector: 'pm-root2',
    template: `
    <div><h1>{{pageTitle}}</h1></div>
    <div> Shiv Sagar Pal</div>
    `
})

export class AppComponent2 {
    pageTitle: string = 'Adding Second Product Management';
}