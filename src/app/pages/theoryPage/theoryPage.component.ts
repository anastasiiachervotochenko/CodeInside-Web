import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/api/http.service';
import { Theory } from 'src/app/Models/theory.model';
import { AuthorizationService } from 'src/app/services/authorizationService';

@Component({
    selector: 'theoryPage',
    templateUrl: './theoryPage.component.html',
    styleUrls: ['./theoryPage.component.scss'],
    providers: [HttpService]
})
export class TheoryPageComponent implements OnInit {

    theory: Theory = new Theory()
    backUrl: string = "theory"

    constructor(private httpService: HttpService, private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        //AuthorizationService.checkUserAuthorization(this.router)
        this.route.params.subscribe(params => {
            const id = Number.parseInt(params['id']);
            this.httpService.getTheory(id).subscribe(
                {
                    next: (data: any) => {
                        data = data["data"]
                        this.theory = {
                            theory_id: id,
                            name: data["name"],
                            description: data["desc"]
                        }
                    },
                    error: (error: any) => {
                    }
                }
            )
        })
    }
}