import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Credential } from "./Credential";




@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
    length: 100
    })
    name: string;

    @Column()
    email: string;

    @Column("date")
    birthdate: Date;

    @Column()
    nDni: string;

    @OneToOne(() => Credential)
    @JoinColumn()
    credentials: Credential;
    
}


