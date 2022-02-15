import { Component, Input } from '@angular/core';
import { EducationTypeEnum } from '../../../../enums/education-type.enum';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialMediaEnum } from '../../../../enums/social-media.enum';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { BehaviorSubject } from 'rxjs';
import { MatCheckboxDefaultOptions, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { InputHelper } from '../../../helpers/input.helpers';
import { ProfileInterface } from '../../../interfaces/profile-interface';
import { JobInterface } from 'src/app/interfaces/job.interface';
import { EducationInterface } from 'src/app/interfaces/education.interface';
import { SocialMediaInterface } from 'src/app/interfaces/social-media.interface';

// @ts-ignore
@Component({
    selector: 'pr-create-profile',
    templateUrl: './create-profile.component.html',
    styleUrls: ['./create-profile.component.css'],
    providers: [
        {
            provide: [ErrorStateMatcher, MAT_CHECKBOX_DEFAULT_OPTIONS], useClass: ShowOnDirtyErrorStateMatcher,
            useValue: {clickAction: 'noop'} as MatCheckboxDefaultOptions,
        },
    ],
})
export class CreateProfileComponent {
    @Input() profile!: ProfileInterface;
    educations: Array<EducationTypeEnum> = [];
    socialMedia: Array<SocialMediaEnum> = [];
    profileForm!: FormGroup;
    addSocialMediaFormGroup!: FormGroup;
    addingEducationFormGroup!: FormGroup;
    addingJobFormGroup!: FormGroup;
    addingJobs = false;
    inPresent = false;
    addingSocialMedia = false;
    addingEducations = false;
    formErrors: any;
    arraysErrors: any;
    socialMedias: FormArray | undefined;
    jobs: FormArray | undefined;
    educationsArray: FormArray | undefined;
    jobsArray: Array<JobInterface> = [];
    educationArray: Array<EducationInterface> = [];
    socialMediaArray: Array<SocialMediaInterface> = [];

    constructor(private fb: FormBuilder, private router: Router) {

        this.formErrors = {
            email: new BehaviorSubject([]),
        };

        this.socialMedia = [
            SocialMediaEnum.FACEBOOK,
            SocialMediaEnum.LINKEDIN,
            SocialMediaEnum.PINTEREST,
            SocialMediaEnum.TWITTER,
        ];

        this.educations = [
            EducationTypeEnum.LYCEUM,
            EducationTypeEnum.BACHELOR,
            EducationTypeEnum.SUPERIOR,
        ];
        this.initform();
    }

    initform(): void {
        // @ts-ignore
        this.profileForm = this.fb.group({
            firstName: this.fb.control('', [Validators.required]),
            lastName: this.fb.control('', [Validators.required]),
            email: this.fb.control('', [Validators.pattern(InputHelper.getEmailRegexPattern()), Validators.required]),
            phone: this.fb.control('', [Validators.required, Validators.pattern('^[+][0-9]{11}$')]),
            address: this.fb.control('', Validators.required),
            profession: this.fb.control('', Validators.required),
            socialMedias: this.fb.array([]),
            jobs: this.fb.array([]),
            educationsArray: this.fb.array([]),
        });
    }

    save(): void {

        const data = {
            data: this.profileForm.value,
            jobArray: this.jobs?.value,
            educationArray: this.educationsArray?.value,
            socialMediaArray: this.socialMedias?.value,
        };

        localStorage.setItem('datasource', JSON.stringify(data));
        this.router.navigate([`/view`]);
    }

// tslint:disable-next-line:typedef
    createEducation(): FormGroup {
        return this.fb.group({
            educationName: new FormControl('', Validators.required),
            graduationDate: new FormControl('', Validators.required),
            educationType: new FormControl('', Validators.required),
        });
    }

    addSocialMedia(): void {
        this.socialMedias = this.profileForm.get('socialMedias') as FormArray;
        // @ts-ignore
        this.socialMedias.push(this.createSocialMedia());

    }

    addJob(): void {
        if(!this.inPresent) {
            this.jobs = this.profileForm.get('jobs') as FormArray;
            this.jobs.push(this.createJob());
        }
    }

    addEducations(): void {
        this.educationsArray = this.profileForm.get('educationsArray') as FormArray;
        this.educationsArray.push(this.createEducation());

    }

    get jobControls() {
        // @ts-ignore
        return this.profileForm.get('jobs')['controls'];
    }

    get socialMediasControls() {
        // @ts-ignore
        return this.profileForm.get('socialMedias')['controls'];
    }

    get educationsControls() {
        // @ts-ignore
        return this.profileForm.get('educationsArray')['controls'];
    }

    convertSMediaToRegexString(): string {
        return (Object.values(SocialMediaEnum).toString()).split(',').join('|').toLowerCase();
    }

// tslint:disable-next-line:typedef
    createSocialMedia(): FormGroup {
        return this.fb.group({
            socialMedia: new FormControl('', Validators.required),
            url: new FormControl('', [
                Validators.required,
                Validators.pattern('(^https://)?('+ this.convertSMediaToRegexString() + ')\.com$/g'),
            ]),
        });

    }

// tslint:disable-next-line:typedef
    createJob(): FormGroup {
        return this.fb.group({
            jobName: new FormControl('', Validators.required),
            startDate: new FormControl('', Validators.required),
            endDate: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            companyName: new FormControl('', Validators.required),
            inPresent: new FormControl(false),
        });
    }

    untilPresent(formGroup: FormGroup,checked: boolean): void {
        this.inPresent = checked;
        formGroup.get('endDate')?.clearValidators();
        formGroup.get('endDate')?.updateValueAndValidity();
    }
}
