package ejecutar;

import clases.MiClase;

public class Principal {
	public static void main (String[] mafer) {
		//MiClase mc = new MiClase();
		
		MiClase mc = new MiClase(14, "tacos");
		
		mc.metodo();
		
		MiClase animal = new MiClase("gato", "pelusa", 5);
		MiClase animal1 = new MiClase("perro", "galleta", 2);
		MiClase animal2 = new MiClase("pez", "flo", 1);
		
		animal.metodo();
		animal1.metodo();
		animal2.metodo();
	}
	

}
