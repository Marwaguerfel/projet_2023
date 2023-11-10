import { ApiProperty } from "@nestjs/swagger"
import { Users } from "src/user/interface/user.interface"

export class complaintDto{
   
    @ApiProperty()

    studentId: string
    @ApiProperty()

    studentName:string
    @ApiProperty()

    createdAt: Date
    @ApiProperty()

    department?: string
    @ApiProperty()

    description?: string
    @ApiProperty()

    subject: string
    
}