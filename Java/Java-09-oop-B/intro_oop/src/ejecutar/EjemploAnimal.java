package ejecutar;

import clases.Animal;

public class EjemploAnimal {
	
	public static void main (String[] args) {
		Animal miAnimal = new Animal("firu");
		miAnimal.setEdad(3);
		System.out.println("El nombre es: " + miAnimal.getNombre());
		System.out.println("y tiene " + miAnimal.getEdad() + " años");
		
		Animal otroAnimal; 
		otroAnimal = new Animal ("firu2");
		otroAnimal.setEdad(5);
		System.out.println("El nuevo animal es: " + otroAnimal.getNombre());
		System.out.println("su edad es: " + otroAnimal.getEdad());
		
	}

}
