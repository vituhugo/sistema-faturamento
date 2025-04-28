import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Entry {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'float' })
    amount: number;
    @Column({ type: 'varchar' })
    type: 'debit' | 'credit';
    @Column({ type: 'timestamptz' })
    date: Date;
    @Column()
    description: string;
}