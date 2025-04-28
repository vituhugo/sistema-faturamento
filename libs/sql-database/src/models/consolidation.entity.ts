import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Consolidation {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'float' })
    totalAmount: number = 0;
    @Column()
    numberOfRecords: number = 0;
    @Column({ type: 'timestamptz', nullable: true })
    periodStart: Date;
    @Column({ type: 'timestamptz' })
    periodEnd: Date;
    @Column({ nullable: true })
    startsAtId: number;
    @Column({ nullable: true })
    endsAtId: number;
}