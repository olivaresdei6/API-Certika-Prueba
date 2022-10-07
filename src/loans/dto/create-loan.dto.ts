/**
 * Decoradores importados de la librería class-validator los cuales nos permiten
 * validar los datos de entrada de las rutas.
 */
import {IsDate, IsEmail, IsInt, IsOptional, IsString, MinLength} from "class-validator";
/**
 * ApiProperty es un decorador que nos permite definir la documentación de la
 * API.
 */
import { ApiProperty } from "@nestjs/swagger";

/**
 * Esta clase es un DTO que se utiliza para crear una categoría.
 * Un DTO es un objeto que se usa para transferir datos entre diferentes capas
 * de la aplicación.
 */
export class CreateLoanDto {
    /**
     * Utilizo decoradores para indicar las validaciones que se deben aplicar
     * a los datos de entrada.
     */
    @ApiProperty({
        example: 'Juan',
        description: 'Nombre del usuario',
        nullable: false,
    })
    @IsString({ message: 'El nombre del usuario debe ser un texto' })
    @MinLength(3, { message: 'El nombre del usuario debe tener al menos 3 caracteres' })
    User_firstName: string;
    
    @ApiProperty({
        example: 'Perez',
        description: 'Apellido del usuario',
        nullable: false,
    })
    @IsString({ message: 'El apellido del usuario debe ser un texto' })
    @MinLength(3, { message: 'El apellido del usuario debe tener al menos 3 caracteres' })
    User_lastName: string;
    
    @ApiProperty({
        example: 'juan76@gmail.com',
        description: 'Correo del usuario',
        nullable: false,
    })
    @IsString({ message: 'El correo del usuario debe ser un texto' })
    @MinLength(3, { message: 'El correo del usuario debe tener al menos 3 caracteres' })
    @IsEmail({}, { message: 'El correo del usuario debe ser un correo válido' })
    User_email: string;
    
    @ApiProperty({
        example: '123456789',
        description: 'Identificación del usuario',
        nullable: false,
    })
    @IsString({ message: 'La identificación del usuario debe ser un texto' })
    @MinLength(6, { message: 'La identificación del usuario debe tener al menos 6 caracteres' })
    User_identification: string;
    
    @ApiProperty({
        example: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description: 'Observaciones del usuario',
        nullable: true
    })
    @IsString({ message: 'Las observaciones del usuario debe ser un texto' })
    @IsOptional()
    User_observations: string;
    
    @ApiProperty({
        example: 'Préstamo para entregar en 3 días',
        description: 'Descripción del préstamo',
        nullable: null,
    })
    @IsString({ message: 'La descripción del préstamo debe ser un texto' })
    @MinLength(3, { message: 'La descripción del préstamo debe tener al menos 3 caracteres' })
    @IsOptional()
    Loan_description: string;
    
    @ApiProperty({
        example: '2021-05-01',
        description: 'Fecha de Devolución',
        nullable: false,
    })
    @IsDate({ message: 'La fecha de devolución debe ser una fecha' })
    Loan_returnDate: Date;
    
    @ApiProperty({
        example: '1',
        description: 'Id del Libro',
        nullable: false,
    })
    @IsInt({ message: 'El id del libro debe ser un número' })
    bookBookId: number;
}
