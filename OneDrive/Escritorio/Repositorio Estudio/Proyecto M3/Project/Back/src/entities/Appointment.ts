import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("date")
    date: Date;
    
    @Column()
    status: string;
    
    @Column()
    time: string;

    @OneToOne(() => User)
    @JoinColumn()
    userId: number; 
}