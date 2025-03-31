import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureReactiveFormComponent } from './feature-reactive-form.component';

describe('FeatureReactiveFormComponent', () => {
    let component: FeatureReactiveFormComponent;
    let fixture: ComponentFixture<FeatureReactiveFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeatureReactiveFormComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FeatureReactiveFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
