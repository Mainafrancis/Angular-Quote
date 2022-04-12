export class Quote {
    showAuthor: boolean;
    
    constructor (
    public id:Number,
    public quo: string,
    public author: string,
    public completeDate: Date)
    
    
    {
        this.showAuthor= true;
    }

    
}