import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient) { }
  getRepos(): Observable<any> {
    return this.http.get('http://localhost:4003/movies.php');
  }

/*
[
    {
        "guid": "47ae92c6-da11-4bed-9443-39384eebf845",
        "friends": [
            {
                "id": 0,
                "name": "Leona Waller"
            },
            {
                "id": 1,
                "name": "Farmer Woods"
            },
            {
                "id": 2,
                "name": "Kerri Madden"
            }
        ]
    },
    {
        "guid": "6d78aff4-f71c-4818-b2a7-da1ee5e1a43c",
        "friends": [
            {
                "id": 0,
                "name": "Camille Thornton"
            },
            {
                "id": 1,
                "name": "Adele Lowe"
            },
            {
                "id": 2,
                "name": "Ryan Blake"
            }
        ]
    },
    {
        "guid": "e2ee3d94-1c4f-4689-9211-9e24e94e9d7f",
        "friends": [
            {
                "id": 0,
                "name": "Small Pace"
            },
            {
                "id": 1,
                "name": "Petersen Knowles"
            },
            {
                "id": 2,
                "name": "Alfreda Black"
            }
        ]
    },
    {
        "guid": "b8352449-d788-41ac-bb87-023aaf8e0014",
        "friends": [
            {
                "id": 0,
                "name": "Melton Bailey"
            },
            {
                "id": 1,
                "name": "Mathis Tanner"
            },
            {
                "id": 2,
                "name": "Guy Jacobson"
            }
        ]
    },
    {
        "guid": "cfa19576-70e0-414a-9744-fb0ae68d9c87",
        "friends": [
            {
                "id": 0,
                "name": "Isabel Nicholson"
            },
            {
                "id": 1,
                "name": "Gilbert Santiago"
            },
            {
                "id": 2,
                "name": "Howard Delacruz"
            }
        ]
    },
    {
        "guid": "02e97a3e-a2a2-4606-8d7c-474dcdd1ec17",
        "friends": [
            {
                "id": 0,
                "name": "Gonzales Lee"
            },
            {
                "id": 1,
                "name": "Marilyn Oconnor"
            },
            {
                "id": 2,
                "name": "Sonja Pacheco"
            }
        ]
    }
]
*/
}
