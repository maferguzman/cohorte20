package colecciones;

public class Personas {
	String nombre;
	int edad;
	
	public Personas(String nombre, int edad) {
		this.nombre = nombre;
		this.edad = edad;	
	}

	public String toString() {
		// TODO Auto-generated method stub
		return " nombre: "+this.nombre+" edad: "+this.edad;
	}
}
