import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureTemplateFormComponent } from './feature-template-form.component';

describe('FeatureTemplateFormComponent', () => {
    let component: FeatureTemplateFormComponent;
    let fixture: ComponentFixture<FeatureTemplateFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeatureTemplateFormComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FeatureTemplateFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
