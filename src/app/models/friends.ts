export class Friend {
    id:string;
    name:string;
    priority:string;
    friends:Friend[];

    constructor(id:string, name:string, priority:string, friends:Friend[]){
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.friends = friends;
    }
}