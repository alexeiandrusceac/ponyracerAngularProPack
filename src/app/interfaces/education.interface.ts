import { EducationTypeEnum } from '../../enums/education-type.enum';

export interface EducationInterface{
    education: string;
    educationType: EducationTypeEnum;
    graduationDate: Date;
}
