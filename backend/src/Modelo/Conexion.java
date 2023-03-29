package Modelo;

import java.sql.Connection;
import java.sql.DriverManager;

public class Conexion {
    Connection con;
    String DB_URL = "jdbc:mysql://localhost:3306/feliandres_bdd";
    String USER = "root";
    String PASSWORD = "";

    //String DB_URL = "jdbc:mysql://localhost/feliandres_bdd";
    //String USER = "root";
    //String PASSWORD = "";

    public Connection getConnection() {
        try {
            con = DriverManager.getConnection(DB_URL, USER, PASSWORD);
            return con;
        } catch (Exception e) {
            System.out.println(e.toString());
        }
        return null;
    }
}
