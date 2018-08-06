import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  template: `
  <table>
    <tr>
      <th>login</th>
      <th>repos</th>
    </tr>
    <tr *ngFor="let r of repoName$ | async">
      <td>{{ r.guid }}</td>
      <td>{{ r.friends[1].name }}</td>
    </tr>
  </table>
  `,
  styles: [``]
})
export class AppComponent implements OnInit {
  title = 'app';
  repoName$: Observable<any>;
  constructor(private gd: GetDataService) { }

  ngOnInit() {
    this.getRepos();
  }

  getRepos() {
    this.repoName$ = this.gd.getRepos();
  }
}
