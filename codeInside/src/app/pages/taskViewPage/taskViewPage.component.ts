import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from 'src/app/api/http.service';
import { RangeSliderOptions } from 'src/app/components/slider/range-slider.component';
import { Task } from 'src/app/models/task';

@Component({
    selector: 'taskView',
    templateUrl: './taskViewPage.component.html',
    styleUrls: ['./taskViewPage.component.scss'],
    providers: [HttpService]
})
export class TaskViewPageComponent {
    faLightbulb = faLightbulb;
    title='Task List';
    form: FormGroup;
    sliderValueControl: FormControl;
    searchValueControl: FormControl;
    sliderOptions: RangeSliderOptions = {
        floor: 1,
        ceil: 5,
        showTicksValues: false,
        ticksArray: [1,2,3,4,5]
    };
    searchValue = '';
    difficulty = {
        value: 1,
        highValue: 5
    };
    tasks: Array<Task> =[
        { name: 'Task 1', description: 'Description 1', complexity: 4, solved: true} as Task,        
        { name: 'Task 2', description: 'Description 2', complexity: 2, solved: true} as Task,
        { name: 'Task 1', description: 'Description 1', complexity: 4, solved: false} as Task,        
        { name: 'Task 2', description: 'Description 2', complexity: 2, solved: true} as Task,
        { name: 'Task 1', description: 'Description 1', complexity: 4, solved: false} as Task,        
        { name: 'Task 2', description: 'Description 2', complexity: 2, solved: true} as Task,
        { name: 'Task 3', description: 'Description 3', complexity: 3, solved: false} as Task
    ];
    sortedTasks: Array<Task> = [
        { name: 'Task 1', description: 'Description 1', complexity: 4, solved: true} as Task,        
        { name: 'Task 2', description: 'Description 2', complexity: 2, solved: true} as Task,
        { name: 'Task 1', description: 'Description 1', complexity: 4, solved: false} as Task,        
        { name: 'Task 2', description: 'Description 2', complexity: 2, solved: true} as Task,
        { name: 'Task 1', description: 'Description 1', complexity: 4, solved: false} as Task,        
        { name: 'Task 2', description: 'Description 2', complexity: 2, solved: true} as Task,
        { name: 'Task 3', description: 'Description 3', complexity: 3, solved: false} as Task
    ];
    solved: boolean = false; 
    constructor(private httpService: HttpService, private router: Router) {

    }

    ngOnInit(): void {
        this.searchValueControl = new FormControl(this.searchValue);
        this.sliderValueControl = new FormControl(this.difficulty);
        this.form = new FormGroup({
            SliderValue: this.sliderValueControl,
            SearchValueControl: this.searchValueControl
        });
        this.httpService.getTasks().subscribe({
            next: (data: any) => {
                console.log(data)
                data = data['data']
                var tasks = new Array<Task>(data.length)
                for(var i = 0; i < data.length; ++i) {
                    var task = new Task()
                    task.task_id = data[i]['id'] as number
                    task.name = data[i]['name']
                    task.description = data[i]['desc']
                    task.complexity = data[i]['complexity']
                    task.topic_name = data[i]['topic__name']
                    task.input = data[i]['input']
                    task.output = data[i]['output']
                    task.solution = data[i]['solution']
                    task.solved = false
                    tasks[i] = task
                }
                this.tasks = tasks;
                this.sortedTasks = tasks;  
            },
            error: (error: any) => {
                
                console.error('There was an error!', error);
            }
        });
    }

    onRangeSliderChange(value: any): void {
        this.difficulty = value;
        this.sortTasks();
    }

    onSearchFieldChange(value: any){
        this.searchValue = value;
        this.sortTasks();
    }

    private sortTasks(){
        this.sortedTasks = this.tasks.filter(x=>x.complexity>=this.difficulty.value && x.complexity<=this.difficulty.highValue);
        this.sortedTasks = this.sortedTasks.filter(x=>x.name.indexOf(this.searchValue)!=-1);
    }
}