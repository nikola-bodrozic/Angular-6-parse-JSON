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
    <tr *ngFor="let r of repoName">
      <td>{{ r.owner.login }}</td>
      <td>{{ r.owner.repos_url }}</td>
    </tr>
  </table>
  `,
  styles: [``]
})
export class AppComponent implements OnInit {
  title = 'app';
  repoName: any;
  constructor(private gd: GetDataService) { }

  ngOnInit() {
    this.getRepos();
  }

  getRepos() {
    this.gd.getRepos().subscribe(
        data => {
          this.repoName = data['items'];
          console.log(this.repoName[5].name);
        }
    );
  }
}
