import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureOtifComponent } from './feature-otif.component';

describe('FeatureOtifComponent', () => {
    let component: FeatureOtifComponent;
    let fixture: ComponentFixture<FeatureOtifComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeatureOtifComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FeatureOtifComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
