package operadores;

import java.util.Scanner;

public class Operadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		
	/*	System.out.println("Introduce el primer valor");
		int valor = scanner.nextInt();
		System.out.println("Introduce el segundo valor");
		int valor0 = scanner.nextInt();
		
		//int a = scanner.nextInt();
		//int b = scanner.nextInt();
		
		int suma = valor + valor0;
		System.out.println("Suma: " + suma);
		
		int resta = valor - valor0;
		System.out.println("Resta: " + resta);
		
		int multiplicacion = valor * valor0;
		System.out.println("Multiplicacion: " + multiplicacion);
		
		int division = valor / valor0;
		System.out.println("Division: " + division);
		
		int modulo = valor % valor0;
		System.out.println("Modulo: " + modulo);
		
		if (modulo == 0) {
			System.out.println("Es un número par");
	} else {
		System.out.println("No es un número par");
		}
		
	  int a = 3; 
	  int b = 5; 
	  boolean comparar = a >= b;
	  boolean logica = true;
	  
	  // and --> && --> ambos son verdaderos
	  if (comparar && logica) {
		  System.out.println("Hola si soy verdadero");
	  } else {
		  System.out.println(comparar);
		  System.out.println(logica);
	  }
	  // or -->  || --> uno de los dos es verdadero
	  if (comparar  || logica) {
		  System.out.println("Hola si soy verdadero");
	  } else {
		  System.out.println(comparar);
		  System.out.println(logica);
	  }

	  System.out.println("a es mayor que b: " + comparar);
	  

	  System.out.println("Elija un número del 1 al 3");
	  int numero = scanner.nextInt();
	  //int numero = 1;
	  String msj = " ";
	  switch(numero) {
	  case 1:
		  System.out.println("uno");
		  break;
	  case 2:
		  System.out.println("dos");
		  break;
	  case 3:
		  System.out.println("tres");
		  break;
		  default:
		  break;
	  } */
		
		System.out.println("----------Menú---------");
		System.out.println("1: Suma");
		System.out.println("2: Resta");
		System.out.println("3: Multiplicacion");
		System.out.println("4: Division");
		System.out.println("7: Salir");
		
		System.out.println("Elija una opción del menú");
		int numero = scanner.nextInt();
		
		String msj = " ";
		  switch(numero) {
		  case 1:
			  System.out.println("Suma");
			  break;
		  case 2:
			  System.out.println("Resta");
			  break;
		  case 3:
			  System.out.println("Multiplicacion");
			  break;
		  case 4:
			  System.out.println("Division");
			  break;
		  case 7:
			  System.out.println("Goodbye");
			  break;
			  default:
			  break;
		  }
		  int i = 0;
		  do {
			  System.out.println("Loop");
			  System.out.println(i);
			  i++;
		  } while (i != 7);
		  //while (numero != 7);
	}
}
