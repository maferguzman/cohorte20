package logicaProgramacion6;

import java.util.Scanner;

public class ReversaPalabras {

			public static void main(String[] args) {

			// entrada del usuario
			Scanner entrada = new Scanner(System.in);
			
			String palabra;
			System.out.println("------Ingrese una palabra------");
			palabra = entrada.next();

			//el String se guarda en un array para poder aplicar método String.toCharArray
		    char[] reversaPalabra = palabra.toCharArray();

			for (int i = reversaPalabra.length - 1; i >= 0; i--) 
				System.out.print(reversaPalabra[i]);

			}  
	
}