/**
 * Decoradores importados de la librería class-validator los cuales nos permiten
 * validar los datos de entrada de las rutas.
 */
import { IsInt, IsOptional, IsString, MinLength } from "class-validator";
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
export class CreateBookDto {
    /**
     * Utilizo decoradores para indicar las validaciones que se deben aplicar
     * a los datos de entrada.
     */
    @ApiProperty({
        example: 'Alfa Omega',
        description: 'Nombre del editorial',
        uniqueItems: true,
        nullable: false,
    })
    @IsString({ message: 'El nombre del editorial debe ser un texto' })
    @MinLength(3, { message: 'El nombre del editorial debe tener al menos 3 caracteres' })
    Edit_name: string;
    
    @ApiProperty({
        example: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description: 'Descripción del editorial',
        nullable: true
    })
    @IsString({ message: 'La descripción del editorial debe ser un texto' })
    @IsOptional()
    Edit_description: string;
    
    @ApiProperty({
        example: 'Deiber',
        description: 'Nombre del autor',
        nullable: false
    })
    @IsString({ message: 'El nombre del autor debe ser un texto' })
    @MinLength(3, { message: 'El nombre del autor debe tener al menos 3 caracteres' })
    Aut_first_name: string;
    
    @ApiProperty({
        example: 'Olivares',
        description: 'Apellido del autor',
        nullable: false
    })
    @IsString({ message: 'El apellido del autor debe ser un texto' })
    @MinLength(3, { message: 'El apellido del autor debe tener al menos 3 caracteres' })
    Aut_lastName: string;
    
    @ApiProperty({
        example: 'olivares45@gmail.com',
        description: 'Correo del autor',
    })
    @IsString({ message: 'El correo del autor debe ser un texto' })
    @MinLength(3, { message: 'El correo del autor debe tener al menos 3 caracteres' })
    Aut_email: string;
    
    @ApiProperty({
        example: 'Programación',
        description: 'Nombre de la categoría',
        nullable: false
    })
    @IsString({ message: 'El nombre de la categoría debe ser un texto' })
    @MinLength(3, { message: 'El nombre de la categoría debe tener al menos 3 caracteres' })
    Cat_name: string;
    
    @ApiProperty({
        example: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description: 'Descripción de la categoría',
        nullable: true
    })
    @IsString({ message: 'La descripción de la categoría debe ser un texto' })
    @IsOptional()
    Cat_description: string;
    
    @ApiProperty({
        example: 'Fundamentos de programación',
        description: 'Nombre del libro',
        nullable: false
    })
    @IsString({ message: 'El nombre del libro debe ser un texto' })
    @MinLength(3, { message: 'El nombre del libro debe tener al menos 3 caracteres' })
    Book_name: string;
    
    @ApiProperty({
        example: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description: 'Descripción del libro',
        nullable: true
    })
    @IsString({ message: 'La descripción del libro debe ser un texto' })
    @IsOptional()
    Book_description: string;
    
    @ApiProperty({
        example: 'Barranquilla - Colombia',
        description: 'Lugar de publicación del libro',
        nullable: false
    })
    @IsString({ message: 'El lugar de publicación del libro debe ser un texto' })
    @MinLength(3, { message: 'El lugar de publicación del libro debe tener al menos 3 caracteres' })
    Book_placeOfEdition: string;
    
    @ApiProperty({
        example: 2021,
        description: 'Año de publicación del libro',
        nullable: false
    })
    @IsInt({ message: 'El año de publicación del libro debe ser un número entero' })
    Book_yearOfEdition: number;
    
    @ApiProperty({
        example: 300,
        description: 'Número de páginas del libro',
        nullable: false
    })
    @IsInt({ message: 'El número de páginas del libro debe ser un número entero' })
    Book_numberOfPages: number;
    
}
