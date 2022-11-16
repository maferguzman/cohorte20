package variables;

public class TipoVariables {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
			System.out.println("------------byte----------");
			System.out.println("tamaño en bits " + Byte.SIZE);
			System.out.println("tamaño en bytes " + Byte.MAX_VALUE);
			System.out.println("valor max " + Byte.MIN_VALUE);
			
			System.out.println("------------integer----------");
			System.out.println("tamaño en bits " + Integer.SIZE);
			System.out.println("tamaño en bytes " + Integer.BYTES);
			System.out.println("valor max " + Integer.MAX_VALUE);
			System.out.println("valor min " + Integer.MIN_VALUE);
			
			System.out.println("------------short----------");
			System.out.println("tamaño en bits " + Short.SIZE);
			System.out.println("tamaño en bytes " + Short.BYTES);
			System.out.println("valor max " + Short.MAX_VALUE);
			System.out.println("valor min " + Short.MIN_VALUE);
			
			System.out.println("------------long----------");
			System.out.println("tamaño en bits " + Long.SIZE);
			System.out.println("tamaño en bytes " + Long.BYTES);
			System.out.println("valor max " + Long.MAX_VALUE);
			System.out.println("valor min " + Long.MIN_VALUE);
			
			System.out.println("------------float----------");
			System.out.println("tamaño en bits " + Float.SIZE);
			System.out.println("tamaño en bytes " + Float.BYTES);
			System.out.println("valor max " + Float.MAX_EXPONENT);
			System.out.println("valor min " + Float.MIN_EXPONENT);
			
			System.out.println("------------double----------");
			System.out.println("tamaño en bits " + Double.SIZE);
			System.out.println("tamaño en bytes " + Double.BYTES);
			System.out.println("valor max " + Double.MAX_VALUE);
			System.out.println("valor min " + Double.MIN_VALUE);
			
			var comaD = 1000.10E23;
			System.out.println("--> double " + comaD);
			
			System.out.println("------------boolean----------");
			boolean estado = true;
			System.out.println("--> : " + estado);
			System.out.println("--> Boolean false " + Boolean.FALSE);
			System.out.println("--> Boolean true " + Boolean.TRUE);
			
			if (estado) {
				System.out.println("--> soy verdadero");
			}
	}
}
