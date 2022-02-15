import { SocialMediaInterface } from '../interfaces/social-media.interface';
import { EducationInterface } from './education.interface';
import { JobInterface } from './job.interface';

export interface ProfileInterface {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phone: number;
    profession: string;
    educationArray: Array<EducationInterface>;
    jobArray: Array<JobInterface>;
    socialMediaArray: Array<SocialMediaInterface>;

}
