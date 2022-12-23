package logicaProgramacion7;

public class CalcularMinutos {
	
		  public static void main(String[] args) {

		    System.out.print("Escriba un día de lunes a viernes");
		    String dia = System.console().readLine();

		    int posicion = 0;

		    switch(dia) {
		      case "lunes":
		        posicion = 0;
		        break;
		      case "martes":
		        posicion = 1;
		        break;
		      case "miércoles":
		      case "miercoles":
		        posicion = 2;
		        break;
		      case "jueves":
		        posicion = 3;
		        break;
		      case "viernes":
		        posicion = 4;
		        break;
		      default:
		        System.out.print("R");
		    }
		    
		    System.out.println("--------Ingrese la hora y minutos exactos---------");
		    
		    System.out.print("Hora: ");
		    int horas = Integer.parseInt(System.console().readLine());
		    
		    System.out.print("Minutos: ");
		    int minutos = Integer.parseInt(System.console().readLine());
		    
		    int minutosTotales = (4 * 24 * 60) + (15 * 60);
		    int minutosActuales = (posicion * 24 * 60) + (horas * 60) + minutos;
		    
		    System.out.print("Faltan " + (minutosTotales - minutosActuales) + " minutos para el fin semana");
		  }
	}
