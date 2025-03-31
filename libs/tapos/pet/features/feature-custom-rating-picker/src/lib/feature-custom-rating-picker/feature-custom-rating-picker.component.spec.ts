import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCustomRatingPickerComponent } from './feature-custom-rating-picker.component';

describe('FeatureCustomRatingPickerComponent', () => {
    let component: FeatureCustomRatingPickerComponent;
    let fixture: ComponentFixture<FeatureCustomRatingPickerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeatureCustomRatingPickerComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FeatureCustomRatingPickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
