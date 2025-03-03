//single Tone class
//Example of data-Base connection

class DatabaseConnection{

    private config:string
    private static instance:DatabaseConnection;
    private constructor(config:string){
        this.config=config;
    }

    public static getInstance(config:string):DatabaseConnection{
        if(!DatabaseConnection.instance){
            DatabaseConnection.instance=new DatabaseConnection(config);
        }
        return DatabaseConnection.instance;
    }
    public displayConfig(): void {
        console.log(`Config: ${this.config}`);
    }


}
const data1=DatabaseConnection.getInstance("config1");
data1.displayConfig(); //config1

const data2=DatabaseConnection.getInstance("config2");
data2.displayConfig(); //config1


console.log(data1===data2); //O/p =True