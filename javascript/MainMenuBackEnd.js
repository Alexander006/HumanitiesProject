

export default class MainMenuBackEnd
{    

    filePath = null;  
        
    constructor (){
        try{
            this.filePath = "../texts/mainMenuText";               
        }
        catch(e)
        {
            alert("Error reading file provided")
        }        
    }


    async readParagraphFile(){   
        try{
            return "Hello, you have read me successfully"
        } 
        catch{
            return "Whoops! Seems like we ran into an error."
        }       
    }
}


