package actividad;

import java.util.Scanner;

public class MangosNaranjas {
	//Entrada de usuario
	Scanner entrada = new Scanner(System.in);
	
		int mangos; 
		int naranjas;
		
	//Constructor
	public MangosNaranjas(int mangos, int naranjas) {
		this.naranjas = naranjas;
		this.mangos = mangos;
	}
	
	//Añadir Método para calcular MCD
	public static int MCD(int mangos, int naranjas) {
		
		int valor1 = Math.max(mangos, naranjas); //el maximo se guarda en a (12772)
		int valor2 = Math.min(mangos, naranjas); // el minimo se guarda en b (12028)
		
		int resultado = 0;
		
		do {
		
		resultado = valor2; 
		valor2 = valor1 % valor2; 
		valor1 = resultado; 

		
		} while (valor2 !=0);
		
		return resultado;
}
	
	//Añadir método para calcular N° de frutas x caja
	public int mangos(){
		
	}
	
	public int numNaranjas(){
		return (naranjas / cajas);
	}

		public void imprimir(){
		int cajas = MCD(mangos, naranjas);
		System.out.println("El número de cajas es: " + cajas);
		System.out.println("El número de mangos es: " + mangos);
		System.out.println("");
	}
}


