package logicaProgramacion9;

import java.util.HashMap;
import java.util.Scanner;

public class Diccionario {
	  public static void main(String[] args) {
		    
		    HashMap<String, String> diccionario = new HashMap<String, String>();
		    Scanner entrada = new Scanner (System.in);
		    
		    diccionario.put("Hola", " Hello");
		    diccionario.put("Adios", " Goodbye");
		    diccionario.put("Bienvenido", " Welcome");
		    diccionario.put("Saludos", " Greetings");
		    diccionario.put("Porque", " Because");
		    diccionario.put("Alguno", " Some");
		    diccionario.put("Familia", " Family");
		    diccionario.put("Hermano", " Brother");
		    diccionario.put("Hermana", " Sister");
		    diccionario.put("Abuelos", " Grandparents");
		    diccionario.put("Amigo", " Friend");
		    diccionario.put("Oficina", " Office");
		    diccionario.put("Jefe", " Boss");
		    diccionario.put("Reunion", " Meeting");
		    diccionario.put("Compañero", " Coworker");
		    diccionario.put("Encargado", " Manager");
		    diccionario.put("Oficio", " Job");
		    diccionario.put("Industria", " Industry");
		    
		    System.out.println("-----Bienvenido al diccionario de palabras básicas en inglés----");
		    
		    System.out.println("Introduzca una palabra:");
		    String palabra = entrada.next();
		    
		    if (diccionario.containsKey(palabra)) {
		      System.out.print("Traduccion de " + palabra);
		      System.out.println(diccionario.get(palabra));
		      } else {
		      System.out.print("La palabra no se encuentra en el diccionario");
		      } 
	  }
}