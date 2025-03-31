import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureDynamicFormComponent } from './feature-dynamic-form.component';

describe('FeatureDynamicFormComponent', () => {
    let component: FeatureDynamicFormComponent;
    let fixture: ComponentFixture<FeatureDynamicFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeatureDynamicFormComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FeatureDynamicFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
