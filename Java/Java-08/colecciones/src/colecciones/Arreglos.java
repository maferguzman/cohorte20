package colecciones;

import java.util.Arrays;

public class Arreglos {
public static void main(String[] args) {
	
	String[] miArreglo = new String[5];
	
	miArreglo[0]= "Mafer";
	miArreglo[1]= "Mafeer";
	miArreglo[2]= "Alonso";
	miArreglo[3]= "Fernanda";
	miArreglo[4]= "Victor";
	
	System.out.println(miArreglo);
	
	for(int i=0; i<miArreglo.length; i++) {
		System.out.println("ciclo for: " + miArreglo[i]);
	}
	System.out.println("--------------------------");
	
	for(String nombre : miArreglo) { 
		System.out.println("For Each: " + nombre);
		
	}

	System.out.println(Arrays.toString(miArreglo));
	
	
	int numeros[]= new int[5];
	numeros[0] =3;
	numeros[1]=-56;
	numeros[2]= (int)3.55; 
	numeros[3] =Integer.parseInt("2");
	
	for(int numero: numeros) {
		System.out.println("Valores del arreglo números: " + numero);
		
	}
	
	
	Personas persona1= new Personas("Pancho", 30);
	Personas persona2= new Personas("Paty", 50);
	

	Personas [] arrPersonas = new Personas[3];
	arrPersonas[0]= persona1;
	arrPersonas[1]= persona2;
	arrPersonas[2]= new Personas("Luis", 20);
	
	System.out.println(arrPersonas[0].nombre);
	System.out.println(arrPersonas[1].nombre);
	System.out.println(arrPersonas[2].nombre);
	
	for(Personas persona : arrPersonas) {
		System.out.println("Nombre: "+ persona.nombre + "edad:" + persona.edad);
	}
	
	String [] arrString= { "Fruta1", "Fruta2", "10", "Hola"}; 
	System.out.println(Arrays.toString(arrString));
}
}
