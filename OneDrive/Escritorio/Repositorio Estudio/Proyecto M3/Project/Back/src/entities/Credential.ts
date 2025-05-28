import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "credentials"
})
export class Credential {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    username: string;
    @Column()
    password: string;
}