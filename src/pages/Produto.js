export default function produto(props) {   
    const dataTemp = JSON.parse(localStorage.getItem('tempPreferenciaData'))

  
    return `    

        <style>
          .container-produto{
            max-width: 100%;
            height: 100vh;  
            background: ${dataTemp.color}       
           }        

          .produto-conteiner{ 
            color: #fff;                
            max-width: 90%;   
            padding: 20px;
            box-shadow: 0 18px 32px 0 rgba(0,0,0,0.2);
       
          }

          .produto-info{   
            font-size: 12px;
            display: flex; 
            justify-content: center; 
            align-items: center;   
            gap: 20px;
     
         
      
          }


          .produto-info-informacao{
            max-width: 100%        
          }

          .produto-btn{      
            background: green;
            width: 100%;
            padding: 20px;
            color: #FFF;
            font-size: 20px;
            border-radius: 10px;
            border: none
          }

          

          @media only screen and (max-width: 800px) {
            .produto-info{              
            flex-flow: row wrap;
         
      
          }

           }

           @media only screen and (min-width: 1500px) {
            .produto-conteiner{    
            width: 40%;
         
                
           } 

           }

        </style>


        <div class="container-produto">

        <div class="produto-conteiner">

       

        <div class="produto-info">
          
        <div>
        <img src="${dataTemp.img}" width="280px">
        </div>

        <div>
        <h1>${dataTemp.pro}</h1>
        </br>
        <h2 class="produto-info-informacao">${dataTemp.info}</h2>
        </br>
        <button class="produto-btn">
          Agendar
        </button>
      
           
        </div>
      </div>
      </div>

     


  
    `

}