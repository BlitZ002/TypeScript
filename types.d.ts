
interface Intern{
    name:string;
    age: number;
    skills:string[];
}


declare enum Domain {
    Web,
    Connect,
    Backend
}

interface Junior{
    name: string;
    age: number;
    skills: string[];
    date_of_promotion : Date;
    domain:Domain;
}

interface Company{
    Interns:Intern[];
    Juniors: Junior[];
    Country:string;
}

export{Company}

