import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyReusableComponentComponent } from './pony-reusable-component.component';

describe('PonyReusableComponentComponent', () => {
    let component: PonyReusableComponentComponent;
    let fixture: ComponentFixture<PonyReusableComponentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PonyReusableComponentComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PonyReusableComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
