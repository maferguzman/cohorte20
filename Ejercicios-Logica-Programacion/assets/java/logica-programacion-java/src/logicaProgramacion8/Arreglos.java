package logicaProgramacion8;

import java.util.ArrayList;
import java.util.Scanner;

public class Arreglos {

		
		public static void main(String[] args) {
			Scanner entrada = new Scanner(System.in);
			
			int numero; 
			
			System.out.println("------Ingrese un número-------");
			
			numero = entrada.nextInt();
			
		    int residuo;
		    int primo=1;
		    int guardar = [];
		    
		    for (int i=2; i<numero; i++){
		        residuo = numero % i; 
		        if(residuo == 0){
		            primo=0;
		            System.out.println("el numero no es primo");
		            i=numero;
		        }
		    }
		    if(primo==1){
		        System.out.println("el numero es primo");
		    }
		    
		    for (int i = 0; i < guardar.length; i++) {  
	            System.out.print(guardar[i] + " ");  
	        }  
		    
		        
		 }
		
	}
	