import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { USER_STATUS } from '../enum/entity'
import { IUser } from '../interface/entity'
import { SuperEntity } from './super.entity'

@Entity('pilatesology_user')
export class UserEntity<T = IUser> extends SuperEntity<T> implements IUser {
  @PrimaryGeneratedColumn({ type: 'int4' })
  user_id: number

  @Column({ type: 'varchar', length: 64, nullable: false })
  email: string

  @Column({ type: 'varchar', length: 64, nullable: false })
  password: string

  @Column({ type: 'char', length: 32, nullable: false })
  salt: string

  @Column({ type: 'varchar', length: 32 })
  phone: string

  @Column({ type: 'int2', nullable: false, default: 0 })
  invalid_password_count: number

  @Column({ type: 'char', length: 1, nullable: false, enum: USER_STATUS, default: USER_STATUS.ACTIVATED })
  status: USER_STATUS

  @CreateDateColumn({ type: 'timestamptz', nullable: false, default: () => 'NOW()' })
  create_date: Date

  @UpdateDateColumn({ type: 'timestamptz' })
  update_date: Date
}
